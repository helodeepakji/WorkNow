from .views import *
from . import views
from django.contrib import admin
from django.urls import path

urlpatterns = [
    path('',views.index, name='index'),
    # it will hit the register class in views.py
    path('regisiter',register.as_view(), name='regisiter'),
    # it will hit regisiter function in views.py
    # path('regisiter',views.regisiter, name='regisiter'),
    path('signup',views.signup, name='signup'),
    # path('login',views.loginpg, name='loginpg'),
    path('login',loginView.as_view(), name='loginpg'),
    path('get_csrf_token', views.get_csrf_token, name='get_csrf_token'),
]
