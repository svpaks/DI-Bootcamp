from django.shortcuts import render
from .models import Animal, Family


# Create your views here.

def family_view(request, family_id):
    animals = Animal.objects.filter(family__id=family_id)
    context = {'animals' : animals}
    return render(request, 'family.html', context)

def animal_view(request, animal_id):
    animal = Animal.objects.get(id=animal_id)
    context = {'animal': animal}
    return render(request, 'animal.html', context)

def animals_list_view(request):
    animals = Animal.objects.all()
    context = {'animals': animals}
    return render(request, 'animal_list.html', context)

