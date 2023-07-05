from django.db import models

class Produs(models.Model):
    nume = models.CharField(max_length=200)
    descriere = models.TextField()
    pret = models.DecimalField(max_digits=5, decimal_places=2)
    imagine = models.ImageField(upload_to='media/produse/', default='imagine_default.jpg')
    

    def __str__(self):
        return self.nume

