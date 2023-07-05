from django.conf import settings
from django.conf.urls.static import static
from django.urls import path, include
from django.contrib import admin
from . import views
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register(r'produse', views.ProdusViewSet)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', views.home, name='home'),
    path('lista_produse/', views.lista_produse, name='lista_produse'),
    path('adauga/', views.adauga_produs, name='adauga_produs'),
    path('cart.html', views.cart, name='cart'),
    path('account.html', views.account, name='account'),
    path('accounts/', include('django.contrib.auth.urls')),
    path('search/', views.search, name='search'),
    path('add_to_cart/<int:id>/', views.add_to_cart, name='add_to_cart'),
    path('remove_from_cart/', views.remove_from_cart, name='remove_from_cart'),
    path('api/', include(router.urls)),
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

