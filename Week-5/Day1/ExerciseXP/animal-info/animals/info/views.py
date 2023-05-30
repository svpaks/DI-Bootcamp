from django.shortcuts import render
import json

# Create your views here.

with open('info/animal_info.json') as file:
    animal_data = json.load(file)

animal_list = animal_data['animals']
family_list = animal_data['families']

def family_view(self, id):
    context = {'animals': []}
    for animal in animal_list:
        if animal ['family'] == id:
            context['animals'].append(animal)
    return render(self, 'index.html', context)

def animal_view(self, id):
    context = {'animal': {}}
    for animal in animal_list:
        if animal ['id'] == id:
            context['animal'] = animal
            break
    return render(self, 'index2.html', context)

