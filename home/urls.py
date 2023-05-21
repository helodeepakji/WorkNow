from . import views
from django.contrib import admin
from django.urls import path

urlpatterns = [
    path('',views.index, name='index'),
    path('regisiter',views.regisiter, name='regisiter'),
    path('about', views.about, name='about'),
]
