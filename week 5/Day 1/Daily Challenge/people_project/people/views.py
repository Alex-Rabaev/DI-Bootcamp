from django.shortcuts import render
from django.http import HttpResponse # pass view information into the browser
from .data import people

# Create your views here.
def people_view(request):
    context = {'people' : []}
    context['people'] = sorted(people, key=lambda per: per['age'])
    return render(request, 'people.html', context) 

def person_view(request, person_id):
    for person in people :
        if person['id'] == int(person_id) :
            return render(request, 'person.html', {'person': person})
    return render(request, 'person_not_found.html')