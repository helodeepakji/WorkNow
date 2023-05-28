import json
from django.shortcuts import render
from django.http import JsonResponse
from django.middleware.csrf import get_token
from rest_framework import generics
from .serializer import *
from rest_framework.response import Response
from .utils import *
from rest_framework_simplejwt.views import TokenObtainPairView
def get_csrf_token(request):
    csrf_token = get_token(request)
    return JsonResponse({'csrfToken': csrf_token})


def index(request):
    return render(request,'index.html')

def about(request):
    return render(request,'index.html')


class loginView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer
    def get(self,request):
        return render(request,'index.html')

def loginpg(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        print(data)
        
        return JsonResponse({'message': 'Form data saved successfully'})
    return render(request,'index.html')

def signup(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        print(data.get('Auth',None))
        temp_auth = data['Auth']
        temp_customer = {
            'Email':data['Email'],
        }
        print(temp_auth)
        
        print(temp_customer['Email'])
        temp_auth['Gender'] = convert(temp_auth['Gender'])
        register_auth = RegisterAuthSerializer(data=temp_auth)
        if register_auth.is_valid(raise_exception=True):
            print('valid')
        register_auth.save()
        print(register_auth.data)
        temp_customer['Auth_ID'] = register_auth.get_id()
        print(temp_customer)
        register_customer = RegisterCustomerSerializer(data=temp_customer)
        if register_customer.is_valid(raise_exception=True):
            print('valid')
        else:
            register_auth.delete()
        register_customer.save()
        print(register_customer.data)
        tokens = register_auth.get_tokens(register_auth.instance)
        return JsonResponse({'message': 'Form data saved successfully','tokens':tokens})
    return render(request,'index.html')

def regisiter(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        
        return JsonResponse({'message': 'Form data saved successfully'})
    return render(request,'index.html')

# worker register code
class register(generics.CreateAPIView):
    def get(self,request):
        return render(request,'index.html')
    def post(self,request):
        data = json.loads(request.body)
        # print(data.FILES)
        print(request.data['Auth'].FILES['Profile_pic'])
        # send data to backend in this format.
        temp_data = {
            'Auth':{
                'username': '9988776560',
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
        
        # to get data from frontend uncomment below lines
        temp_data_auth = request.data['Auth']
        temp_data_worker = request.data['Worker']
        temp_data_address = request.data['Address']
        
        # testing and comment below lines
        # temp_data_auth = temp_data['Auth']
        # temp_data_worker = temp_data['Worker']
        # temp_data_address = temp_data['Address']
        
        print('temp_data_auth',temp_data_auth)
        print('temp_data_worker',temp_data_worker)
        print('temp_data_address',temp_data_address)
        temp_data_auth['Gender'] = convert(temp_data_auth['Gender'])
        # testing
        # testing
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
        tokens = registerAuth.get_tokens(registerAuth.instance)
        return Response({'message': 'Form data saved successfully','token_data':tokens,'auth_data':registerAuth.data,'worker_data':registerWorker.data,'address_data':registerAddress.data})

'''{'name': '', 'phone': '', 'education': '', 'gender': '', 'age': '', 'password': '', 'cpassword': '', 'category': 'Carpenter', 'language': '', 'area': '', 'city': '', 'state': '', 'pincode': '', 'salarytype': 'Daily Basis', 'salary': '', 'govidtype': 'Aadhar', 'govid': '', 'profile': None}'''