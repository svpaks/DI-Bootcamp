from django.shortcuts import render
from django.views.generic import ListView
from .models import Film, Country, Category, Director

# Create your views here.

class HomePageView(ListView) :

    template_name = 'homepage.html'
    context_object_name = 'films'

    def get_queryset(self):
        return Film.objects.all()