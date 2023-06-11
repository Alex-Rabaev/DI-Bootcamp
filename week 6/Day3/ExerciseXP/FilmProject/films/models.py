from django.db import models
from django.utils import timezone

# Create your models here.


class Country(models.Model):
    name = models.CharField(max_length=50)

    def __str__(self):
        return self.name


class Category(models.Model):
    name = models.CharField(max_length=50)

    def __str__(self):
        return self.name


class Director(models.Model):
    first_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50)

    def __str__(self):
        return f"{self.first_name} {self.last_name}"


class Film(models.Model):
    title = models.CharField(max_length=50)
    release_date = models.DateField(default=timezone.now().date())
    created_in_country = models.ForeignKey(
        Country, on_delete=models.CASCADE, related_name="films_created"
    )
    available_in_countries = models.ManyToManyField(
        Country, related_name="films_available"
    )
    category = models.ManyToManyField(Category, related_name="films")
    director = models.ManyToManyField(Director, related_name="films")

    def __str__(self):
        return self.title


class Review(models.Model):
    film = models.ForeignKey(Film, on_delete=models.CASCADE, related_name="reviews")
    review_text = models.TextField()
    rating = models.IntegerField(choices=[(i, i) for i in range(1, 11)])

    review_date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Review for {self.film.title}"


from django.db import models


class Poster(models.Model):
    film = models.OneToOneField(Film, on_delete=models.CASCADE, related_name="poster")
    image = models.ImageField(upload_to="posters/")
    explanation_img = models.CharField(max_length=255)

    def __str__(self):
        return f"Poster for {self.film.title}"


# related_name нужен чтобы чтобы находить только те объекты (элементы моделей),
# связанные с другими объектами в других моделях по "определенным правилам"
