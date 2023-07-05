from django import forms
from .models import Produs

class ProdusForm(forms.ModelForm):
    class Meta:
        model = Produs
        fields = '__all__'  # or list the fields you want to include in your form

