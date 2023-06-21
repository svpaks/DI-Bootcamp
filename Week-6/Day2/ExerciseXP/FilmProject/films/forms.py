from django import forms
from .models import Film, Director, Review
from django.utils import timezone

class FilmForm(forms.ModelForm):
    class Meta:
        model = Film
        fields = [
            "title",
            "created_in_country",
            "available_in_countries",
            "category",
            "director",
        ]

class DirectorForm(forms.ModelForm):
    class Meta:
        model = Director
        fields = ["first_name", "last_name"]

class ReviewForm(forms.ModelForm):
    class Meta:
        model = Review
        fields = "__all__"
        widgets = {"rating": forms.RadioSelect}

    def __init__(self, *args, **kwargs):
        self.review_author = kwargs.pop("review_author", None)
        super().__init__(*args, **kwargs)

    def save(self, commit=True):
        instance = super().save(commit=False)
        instance.review_author = self.review_author
        if commit:
            instance.save()
        return instance