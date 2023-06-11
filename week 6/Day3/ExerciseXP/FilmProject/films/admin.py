from django.contrib import admin
from .models import Film, Category, Country, Director

# Register your models here.

admin.site.register(Film)
admin.site.register(Category)
admin.site.register(Country)
admin.site.register(Director)
