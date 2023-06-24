from typing import Any, Dict
from django.shortcuts import render
from django.views.generic import ListView, UpdateView
from .models import Film, Country, Category, Director, Review
from django.urls import reverse_lazy
from django.views.generic.edit import CreateView
from .forms import FilmForm, DirectorForm, ReviewForm, AddFilmWithPosterForm
from django.contrib.auth.mixins import UserPassesTestMixin, LoginRequiredMixin
from django.contrib.messages.views import SuccessMessageMixin
from django.views import generic


# Create your views here.


class HomePageView(LoginRequiredMixin, ListView):
    template_name = "homepage.html"
    model = Film
    context_object_name = "films"

    def get_queryset(self):
        return Film.objects.all()

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context["directors"] = Director.objects.all()
        if self.request.user.is_authenticated:
            context["user_films"] = Film.objects.filter()
        return context


class FilmCreateView(LoginRequiredMixin, UserPassesTestMixin, CreateView):
    model = Film
    form_class = AddFilmWithPosterForm
    template_name = "film/add_film.html"
    success_url = reverse_lazy("homepage")

    def test_func(self):
        return self.request.user.is_superuser


class DirectorCreateView(LoginRequiredMixin, UserPassesTestMixin, CreateView):
    model = Director
    form_class = DirectorForm
    template_name = "director/add_director.html"
    success_url = reverse_lazy("homepage")

    def test_func(self):
        return self.request.user.is_superuser


class ReviewCreateView(LoginRequiredMixin, CreateView):
    model = Review
    form_class = ReviewForm
    template_name = "review/add_review.html"
    success_url = reverse_lazy("homepage")

    def get_initial(self) -> Dict[str, Any]:
        data = self.request.GET
        film_id = data.get("film_id", None)
        if film_id is not None:
            film_id = int(film_id)
            film = Film.objects.get(id=film_id)
            return {"film": film}
        else:
            return {}

    def form_valid(self, form):
        form.instance.review_author = self.request.user
        return super().form_valid(form)

    def get_form_kwargs(self):
        kwargs = super().get_form_kwargs()
        kwargs["review_author"] = self.request.user
        return kwargs


class FilmUpdateView(LoginRequiredMixin, UserPassesTestMixin, UpdateView):
    model = Film
    form_class = AddFilmWithPosterForm
    template_name = "film/film_edit.html"
    success_url = reverse_lazy("homepage")

    def test_func(self):
        return self.request.user.is_superuser


class DirectorUpdateView(LoginRequiredMixin, UserPassesTestMixin, UpdateView):
    model = Director
    form_class = DirectorForm
    template_name = "director/director_edit.html"
    success_url = reverse_lazy("homepage")

    def test_func(self):
        return self.request.user.is_superuser


class FilmDeleteView(UserPassesTestMixin, SuccessMessageMixin, generic.DeleteView):
    model = Film
    success_url = reverse_lazy("homepage")
    success_message = "Film deleted successfully."
    template_name = "film/confirm_delete.html"

    def get_queryset(self):
        queryset = super().get_queryset()
        return queryset.filter(id=self.kwargs["pk"])

    def test_func(self):
        return self.request.user.is_superuser
