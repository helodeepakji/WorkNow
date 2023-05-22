import json
from django.shortcuts import render
from django.http import JsonResponse
from django.middleware.csrf import get_token
from rest_framework import generics
# from .serializer import *

def get_csrf_token(request):
    csrf_token = get_token(request)
    return JsonResponse({'csrfToken': csrf_token})


def index(request):
    return render(request,'index.html')

def about(request):
    return render(request,'index.html')

def regisiter(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        print(data)
        return JsonResponse({'message': 'Form data saved successfully'})
    return render(request,'index.html')

class register(generics.CreateAPIView):
    def get(self,request):
        return render(request,'index.html')
    def post(self,request):
        
        return JsonResponse({'message': 'Form data saved successfully'})