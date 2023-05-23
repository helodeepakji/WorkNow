import json
from django.shortcuts import render
from django.http import JsonResponse
from django.middleware.csrf import get_token
from rest_framework import generics
from .serializer import *

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
        # send data to backend in this format.
        temp_data = {
            'Auth':{
                'username': '9988776660',
                'password': 'test',
                'cpassword': 'test',
                'Profile_pic': None,
                'Name': 'test',
                'Is_worker': True,
                'Is_customer': False,
                'Gender': 'M',
            },
            'Worker':{
                'Category': 'Carpenter',
                'Language': 'Hindi',
                'Salary_type': 'D_B',
                'Salary': 500,
                'Govid_type': 'Aadhar',
                'Gov_id': '2564787898',
                'Education': 'B',
                'Age': '20',
            },
            'Address':{
                'Area': 'test',
                'City': 'test',
                'State': 'test',
                'Pincode': 'test',
                'Default': True,
            }
        }
        
        temp_data_auth = temp_data['Auth']
        print('temp_data_auth',temp_data_auth)
        temp_data_worker = temp_data['Worker']
        print('temp_data_worker',temp_data_auth)
        temp_data_address = temp_data['Address']
        print('temp_data_address',temp_data_auth)
        registerAuth = RegisterAuthSerializer(data=temp_data_auth)
        registerAuth.is_valid(raise_exception=True)
        registerAuth.save()
        temp_data_worker['Auth_ID'] = registerAuth.get_id()
        print("registerAuth_data",registerAuth.data)
        registerWorker = WorkerSerializer(data=temp_data_worker)
        if registerWorker.is_valid(raise_exception=True):
            print('valid')
        registerWorker.save()
        print(registerWorker.get_id())
        temp_data_address['WorkerID'] = registerWorker.get_id()
        registerAddress = AddressSerializer(data=temp_data_address)
        registerAddress.is_valid(raise_exception=True)
        registerAddress.save()
        return JsonResponse({'message': 'Form data saved successfully'})

'''{'name': '', 'phone': '', 'education': '', 'gender': '', 'age': '', 'password': '', 'cpassword': '', 'category': 'Carpenter', 'language': '', 'area': '', 'city': '', 'state': '', 'pincode': '', 'salarytype': 'Daily Basis', 'salary': '', 'govidtype': 'Aadhar', 'govid': '', 'profile': None}'''