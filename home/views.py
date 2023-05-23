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
        data = request.data
        first_name = data['name'].split(' ')[0]
        if len(data['name'].split(' ')) > 1:
            last_name = data['name'].split(' ')[1]
        else:
            last_name = ''
        phone = data['phone']
        education = data['education']
        gender = data['gender']
        age = data['age']
        password = data['password']
        cpassword = data['cpassword']
        category = data['category']
        language = data['language']
        area = data['area']
        city = data['city']
        state = data['state']
        pincode = data['pincode']
        salarytype = data['salarytype']
        salary = data['salary']
        govidtype = data['govidtype']
        govid = data['govid']
        profile_pic = data['profile']
        user_data = {
            'first_name': first_name,
            'last_name': last_name,
            'username': 'email',
        }
        print(data)
        return JsonResponse({'message': 'Form data saved successfully'})

'''{'name': '', 'phone': '', 'education': '', 'gender': '', 'age': '', 'password': '', 'cpassword': '', 'category': 'Carpenter', 'language': '', 'area': '', 'city': '', 'state': '', 'pincode': '', 'salarytype': 'Daily Basis', 'salary': '', 'govidtype': 'Aadhar', 'govid': '', 'profile': None}'''