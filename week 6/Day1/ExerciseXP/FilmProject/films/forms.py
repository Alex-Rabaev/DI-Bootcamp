from django import forms
from .models import Film, Director


class FilmForm(forms.ModelForm):
    class Meta:
        model = Film
        fields = [
            "title",
            "created_in_country",
            "available_in_countries",
            "category",
            "director",
        ]


class DirectorForm(forms.ModelForm):
    class Meta:
        model = Director
        fields = ["first_name", "last_name"]
