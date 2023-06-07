from django.urls import path
from .views import (
    HomePageView,
    FilmCreateView,
    DirectorCreateView,
    ReviewCreateView,
    FilmUpdateView,
    DirectorUpdateView,
)

urlpatterns = [
    path("homepage/", HomePageView.as_view(), name="homepage"),
    path("add_film/", FilmCreateView.as_view(), name="add_film"),
    path("add_director/", DirectorCreateView.as_view(), name="add_director"),
    path("add_review/", ReviewCreateView.as_view(), name="add_review"),
    path("film/<int:pk>/edit/", FilmUpdateView.as_view(), name="edit_film"),
    path("director/<int:pk>/edit/", DirectorUpdateView.as_view(), name="edit_director"),
]
