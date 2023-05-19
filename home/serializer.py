from rest_framework import serializers

from .models import Customer,Address,Worker

class CustomerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Customer
        fields = {'id','username','first_name','last_name','email','Profile_pic','Education','Gov_id','Language'}

class AddressSerializer(serializers.ModelSerializer):
    class Meta:
        model = Address
        fields = {'id','CustomerID','Area','City','State','Pincode','Default'}

class WorkerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Worker
        fields = {'First_name','Last_name','Phone_number','Age','Gender','Category','Salary_type','Password'}