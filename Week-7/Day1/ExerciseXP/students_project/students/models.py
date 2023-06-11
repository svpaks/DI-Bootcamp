from django.db import models

# Create your models here.

class Student(models.Model):
    first_name = models.CharField(max_length=25)
    last_name = models.CharField(max_length=25)
    email = models.EmailField() # when creating
    date_joined = models.DateTimeField(auto_now=True) # when updating

    def __str__(self):
        return f"{self.first_name} {self.last_name}"