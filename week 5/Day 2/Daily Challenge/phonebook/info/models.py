from django.db import models

# Create your models here.


class Person(models.Model):
    name = models.CharField(max_length=50)
    email = models.CharField(unique=True)
    phone_number =models.CharField(max_length=50)
    adress = models.CharField(max_length=100)


