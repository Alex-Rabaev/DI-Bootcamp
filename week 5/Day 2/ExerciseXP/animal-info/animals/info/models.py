from django.db import models

# Create your models here.

class Family(models.Model):
    name = models.CharField(max_length=25)

    def __str__(self):
        return self.name

class Animal(models.Model):
    name = models.CharField(max_length=25)
    legs = models.PositiveIntegerField()
    weight = models.FloatField()
    height = models.FloatField()
    speed = models.PositiveIntegerField()
    family = models.ForeignKey(Family, on_delete=models.CASCADE)

    def __str__(self):
        return f"{self.id}: {self.family} - {self.name}"