from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name='home'),
    path('about', views.about, name='about'),
    path('our_services', views.our_services, name='our_services'),
    path('contact', views.contact, name='contact')
]
