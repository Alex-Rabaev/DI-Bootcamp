from django.shortcuts import render, redirect, get_object_or_404
from django.contrib.auth import authenticate, login, logout
from django.urls import reverse_lazy
from django.views.generic import CreateView, FormView
from .forms import SignUpForm, LoginForm
from django.contrib.auth.models import User
from django.views.generic import View
from django.contrib.auth.mixins import LoginRequiredMixin
from films.models import Film
from accounts.models import UserProfile


class SignupView(CreateView):
    form_class = SignUpForm
    model = User
    template_name = "signup.html"
    success_url = reverse_lazy("login")


class LoginView(FormView):
    form_class = LoginForm
    template_name = "login.html"

    def form_valid(self, form):
        username = form.cleaned_data.get("username")
        password = form.cleaned_data.get("password")
        user = authenticate(username=username, password=password)
        if user is not None:
            login(self.request, user)
            return redirect("homepage")
        return super().form_invalid(form)


class LogoutView(View):
    def get(self, request):
        logout(request)
        return redirect("login")


class ProfileView(View):
    def get(self, request, user_id):
        user = get_object_or_404(User, id=user_id)
        context = {"user": user}
        return render(request, "profile.html", context)


class FavoriteFilmView(LoginRequiredMixin, View):
    def post(self, request, film_id):
        film = Film.objects.get(pk=film_id)
        user_profile = UserProfile.objects.get(user=request.user)

        if film in user_profile.favorite_film.all():
            user_profile.favorite_film.remove(film)
        else:
            user_profile.favorite_film.add(film)

        return redirect("homepage")
