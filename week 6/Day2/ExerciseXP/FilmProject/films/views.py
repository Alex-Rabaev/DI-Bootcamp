from typing import Any, Dict
from django.shortcuts import render
from django.views.generic import ListView, UpdateView
from .models import Film, Country, Category, Director, Review
from django.urls import reverse_lazy
from django.views.generic.edit import CreateView
from .forms import FilmForm, DirectorForm, ReviewForm
from django.contrib.auth.mixins import UserPassesTestMixin


# Create your views here.


class HomePageView(ListView):
    template_name = "homepage.html"
    context_object_name = "films"

    def get_queryset(self):
        return Film.objects.all()

    def get_context_data(self, **kwargs: Any) -> Dict[str, Any]:
        context = super().get_context_data(**kwargs)
        context["directors"] = Director.objects.all()
        return context

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        if self.request.user.is_authenticated:
            context["user_films"] = Film.objects.filter()
        return context


class FilmCreateView(CreateView):
    model = Film
    form_class = FilmForm
    template_name = "film/add_film.html"
    success_url = reverse_lazy("homepage")

    def test_func(self):
        return self.request.user.is_superuser


class DirectorCreateView(CreateView):
    model = Director
    form_class = DirectorForm
    template_name = "director/add_director.html"
    success_url = reverse_lazy("homepage")

    def test_func(self):
        return self.request.user.is_superuser


class ReviewCreateView(CreateView):
    model = Review
    form_class = ReviewForm
    template_name = "review/add_review.html"
    success_url = reverse_lazy("homepage")


class FilmUpdateView(UserPassesTestMixin, UpdateView):
    model = Film
    form_class = FilmForm
    template_name = "film/film_edit.html"
    success_url = reverse_lazy("homepage")

    def test_func(self):
        return self.request.user.is_superuser


class DirectorUpdateView(UserPassesTestMixin, UpdateView):
    model = Director
    form_class = DirectorForm
    template_name = "director/director_edit.html"
    success_url = reverse_lazy("homepage")

    def test_func(self):
        return self.request.user.is_superuser
