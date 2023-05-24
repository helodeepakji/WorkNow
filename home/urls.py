from .views import *
from . import views
from django.contrib import admin
from django.urls import path

urlpatterns = [
    path('',views.index, name='index'),
    path('regisiter',register.as_view(), name='regisiter'),
    # path('regisiter',views.regisiter, name='regisiter'),
    path('get_csrf_token', views.get_csrf_token, name='get_csrf_token'),
]
