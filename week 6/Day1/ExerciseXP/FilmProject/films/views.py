from django.shortcuts import render
from django.views.generic import ListView
from .models import Film, Country, Category, Director
from django.urls import reverse_lazy
from django.views.generic.edit import CreateView
from .forms import FilmForm, DirectorForm


# Create your views here.


class HomePageView(ListView):
    template_name = "homepage.html"
    context_object_name = "films"

    def get_queryset(self):
        return Film.objects.all()


class FilmCreateView(CreateView):
    model = Film
    form_class = FilmForm
    template_name = "film/add_film.html"
    success_url = reverse_lazy("homepage")


class DirectorCreateView(CreateView):
    model = Director
    form_class = DirectorForm
    template_name = "director/add_director.html"
    success_url = reverse_lazy("homepage")
