from django.shortcuts import render # this line is added automatically
from django.http import HttpResponse # pass view information into the browser
from .models import Animal, Family





def family_view(request, id):
    animals = Animal.objects.filter(family_id=id)
    context = {'animals' : animals}
    return render(request, 'family.html', context)

def animal_view(request, animal_id):
    animal = Animal.objects.get(id=animal_id)
    return render(request, 'animal.html', {'animal': animal})

def animals_list_view(request):
    animals = Animal.objects.all()
    context = {'animals': animals}
    return render(request, 'animals_list.html', context)