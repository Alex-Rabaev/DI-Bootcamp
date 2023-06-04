from django.shortcuts import render
from .models import Person
from .forms import SearchForm
# Create your views here.


def by_name(request, name_search: str) :
    person = None
    try:
        person = Person.objects.get(name = name_search)
    except Person.DoesNotExist:
        pass
    context = {'person' : person}
    return render(request, 'person.html', context)

def by_number(request, phonenumber: str): 
    person = None
    try:
        person = Person.objects.get(phone_number = phonenumber)
    except Person.DoesNotExist:
        pass
    context = {'person' : person}
    return render(request, 'person.html', context)

def search_person(request):
    if request.method == 'POST':
        form = SearchForm(request.POST)
        if form.is_valid():
            search_term = form.cleaned_data.get('search_term')
            if search_term.isdigit():
                return by_number(request, search_term)
            else:
                return by_name(request, search_term)
    else:
        form = SearchForm()
    return render(request, 'search_person.html', {'form': form})