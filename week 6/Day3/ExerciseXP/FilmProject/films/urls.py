from django.urls import path
from .views import (
    HomePageView,
    FilmCreateView,
    DirectorCreateView,
    ReviewCreateView,
    FilmUpdateView,
    DirectorUpdateView,
    FilmDeleteView,
)
from accounts.views import FavoriteFilmView
from django.contrib.auth.decorators import login_required
from django.contrib.admin.views.decorators import staff_member_required

urlpatterns = [
    path("homepage/", HomePageView.as_view(), name="homepage"),
    path("add_film/", staff_member_required(FilmCreateView.as_view()), name="add_film"),
    path(
        "add_director/",
        staff_member_required(DirectorCreateView.as_view()),
        name="add_director",
    ),
    path("add_review/", login_required(ReviewCreateView.as_view()), name="add_review"),
    path(
        "film/<int:pk>/edit/",
        staff_member_required(FilmUpdateView.as_view()),
        name="edit_film",
    ),
    path(
        "director/<int:pk>/edit/",
        staff_member_required(DirectorUpdateView.as_view()),
        name="edit_director",
    ),
    path("film/delete/<int:pk>/", FilmDeleteView.as_view(), name="delete-film"),
    path(
        "film/favorite/<int:film_id>/", FavoriteFilmView.as_view(), name="favorite-film"
    ),
]
