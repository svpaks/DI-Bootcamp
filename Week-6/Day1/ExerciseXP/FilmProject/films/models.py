from django.db import models

# Create your models here.

class Country(models.Model):
    name = models.CharField(max_length=20)

    def __str__(self):
        return self.name

class Category(models.Model):
    name = models.CharField(max_length=20)

    def __str__(self):
            return self.name

class Director(models.Model):
    first_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50)

    def __str__(self):
        return self.first_name
    
class Film(models.Model):
    
    title = models.CharField(max_length=50)
    release_date = models.DateTimeField(auto_now_add=True)
        # default = timezone.now().date()
    created_in_country = models.ForeignKey(Country, related_name='films_created', on_delete=models.CASCADE)                             
    available_in_countries = models.ManyToManyField(Country, related_name='films_available')                                                      
    category = models.ManyToManyField(Category, related_name='films')
    director = models.ManyToManyField(Director, related_name='films')

    def __str__(self):
        return self.title