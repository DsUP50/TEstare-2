from rest_framework import serializers
from .models import Produs

class ProdusSerializer(serializers.ModelSerializer):
    class Meta:
        model = Produs
        fields = ['id', 'nume', 'descriere', 'pret', 'imagine']

