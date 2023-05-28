from django.shortcuts import render # this line is added automatically
from django.http import HttpResponse # pass view information into the browser
import json



with open('info/data/animal-info.json') as file:
    data = json.load(file)

# Access the loaded data
animal_list = data['animals']
family_list = data['families']

    
def family(self, id):
    context = {
        'animals': [],
        'family' : ''
    }
    # Instead of animals, get dictionary from JSON
    
    # from json
    for animal in animal_list:
        if animal['family'] == id:
            context['animals'].append(animal)
    for family in family_list :
        if family['id'] == id :
            context['family'] = family['name']
            break
    return render(self, 'index.html', context) # list of all animals in the family

def animals(self, id):
    context = {
        'animal': {},
        'family' : ''
    } 
    for animal in animal_list :
        if animal['id'] == id :
            context['animal'] = animal
            break
    for family in family_list :
        if family['id'] == id :
            context['family'] = family['name']
            break
    return render(self, 'index2.html', context)