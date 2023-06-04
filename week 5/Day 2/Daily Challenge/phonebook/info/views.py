from django.shortcuts import render
from .models import Person
# Create your views here.


def by_name(request, name_search: str) :
    person = None
    try:
        person = Person.objects.get(name = name_search)
    except Person.DoesNotExist:
        pass
    context = {'person' : person}
    return render(request, 'search.html', context)

def by_number(request, phonenumber: str): 
    person = None
    try:
        person = Person.objects.get(phone_number = phonenumber)
    except Person.DoesNotExist:
        pass
    context = {'person' : person}
    return render(request, 'search.html', context)