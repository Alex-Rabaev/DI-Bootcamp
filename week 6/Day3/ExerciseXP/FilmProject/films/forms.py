from django import forms
from .models import Film, Director, Review, Poster, Category, Country
from django.utils import timezone


class FilmForm(forms.ModelForm):
    class Meta:
        model = Film
        fields = "__all__"
        widget = {"release_date": forms.DateInput(attrs={"type": "date"})}

    def clean_release_date(self):
        today = timezone.now().date()
        release_date = self.cleaned_data.get("release_date")
        if release_date > today:
            raise forms.ValidationError("Release date cannot be in the future!")
        return release_date


class DirectorForm(forms.ModelForm):
    class Meta:
        model = Director
        fields = ["first_name", "last_name"]  # fields = '__all__'


class ReviewForm(forms.ModelForm):
    class Meta:
        model = Review
        fields = ["film", "review_text", "rating"]
        widgets = {"rating": forms.RadioSelect}


class AddFilmWithPosterForm(forms.ModelForm):
    title = forms.CharField(label="Title")
    created_in_country = forms.ModelChoiceField(
        queryset=Country.objects.all(), label="Created in Country"
    )
    available_in_countries = forms.ModelMultipleChoiceField(
        queryset=Country.objects.all(), label="Available in Countries"
    )
    category = forms.ModelMultipleChoiceField(
        queryset=Category.objects.all(), label="Category"
    )
    directors = forms.ModelMultipleChoiceField(
        queryset=Director.objects.all(), label="Directors"
    )
    image = forms.ImageField(label="Image")
    explanation_img = forms.CharField(max_length=255, label="Image Explanation")

    class Meta:
        model = Film
        fields = [
            "title",
            "release_date",
            "created_in_country",
            "available_in_countries",
            "category",
            "directors",
            "image",
            "explanation_img",
        ]

        widgets = {"release_date": forms.DateInput(attrs={"type": "date"})}

        def clean_release_date(self):
            today = timezone.now().date()
            release_date = self.cleaned_data.get("release_date")
            if release_date > today:
                raise forms.ValidationError("Release date cannot be in the future!")
            return release_date

        def save(self, commit=True):
            film = super().save(commit=False)
            if commit:
                film.save()
            if self.cleaned_data["image"]:
                poster = Poster(
                    film=film,
                    image=self.cleaned_data["image"],
                    explanation_img=self.cleaned_data["explanation_img"],
                )
                poster.save()
            return film
