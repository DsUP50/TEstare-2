from django.shortcuts import render, redirect
from .models import Produs
from .forms import ProdusForm
from rest_framework import viewsets
from .serializers import ProdusSerializer

class ProdusViewSet(viewsets.ModelViewSet):
    queryset = Produs.objects.all()
    serializer_class = ProdusSerializer

def home(request):
    produse = Produs.objects.all() 
    return render(request, 'home.html', {'produse': produse})  

def lista_produse(request):
    produse = Produs.objects.all()
    return render(request, 'produse/lista_produse.html', {'produse': produse})

def adauga_produs(request):
    if request.method == "POST":
        form = ProdusForm(request.POST, request.FILES)
        if form.is_valid():
            produs = form.save()
            return redirect('lista_produse')
    else:
        form = ProdusForm()
    return render(request, 'produse/adauga_produs.html', {'form': form})

def cart(request):
    return render(request, 'cart.html')

def account(request):
    return render(request, 'account.html')

def search(request):
    query = request.GET.get('q')
    if query:
        produse = Produs.objects.filter(nume__icontains=query)
    else:
        produse = Produs.objects.all()
    return render(request, 'produse/search.html', {'produse': produse})

def add_to_cart(request, id):
    return render(request, 'cart.html')

def remove_from_cart(request):
    return render(request, 'cart.html')

