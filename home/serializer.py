from rest_framework import serializers
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework.decorators import permission_classes
from rest_framework.permissions import AllowAny

from .models import *

class RegisterAuthSerializer(serializers.ModelSerializer):
    
    password = serializers.CharField(write_only=True)
    cpassword = serializers.CharField(write_only=True)
    class Meta:
        model = Auth
        fields = ('username','password','Name','Gender','Is_worker','Is_customer','cpassword')

    def validate(self, attrs):
        error = ''
        if attrs['Is_worker'] and attrs['Is_customer']:
            error = "User cannot be both worker and customer"
            raise serializers.ValidationError(error)
        if not attrs['password'] or not attrs['cpassword']:
            error = "Password and Confirm Password must be filled"
            raise serializers.ValidationError(error)
        if attrs['password'] != attrs['cpassword']:
            error = "Password and Confirm Password must be same"
            raise serializers.ValidationError(error)
        if not attrs['Is_worker'] and not attrs['Is_customer']:
            error = "User must be either worker or customer"
            raise serializers.ValidationError(error)
        if Auth.objects.filter(username=attrs['username']).exists():
            error = "Username already exists"
            raise serializers.ValidationError(error)
        return attrs
    
    
    def create(self, validated_data):
        auth = Auth.objects.create(
            username = validated_data['username'],
            Name = validated_data['Name'],
            Gender = validated_data['Gender'],
            Is_worker = validated_data['Is_worker'],
            Is_customer = validated_data['Is_customer'],
        )
        
        auth.set_password(validated_data['password'])
        auth.save()
        return auth
    
    def get_tokens(self, user):
        tokens = RefreshToken.for_user(user)
        data = {
            'refresh': str(tokens),
            'access': str(tokens.access_token),
        }
        return data
    
    def get_id (self):
        id = Auth.objects.get(username=self.validated_data['username']).id
        return id

class AddressSerializer(serializers.ModelSerializer):
    class Meta:
        model = Address
        fields = ('Area','City','State','Pincode','WorkerID')
    
    def validate(self, attrs):
        if not (attrs['Area'] and attrs['City'] and attrs['State'] and attrs['Pincode']):
            raise serializers.ValidationError("All fields must be filled")
        return attrs
    
    def create(self, validated_data):
        address = Address.objects.create(
            Area = validated_data['Area'],
            City = validated_data['City'],
            State = validated_data['State'],
            Pincode = validated_data['Pincode'],
            WorkerID = validated_data['WorkerID'],
        )
        address.save()
        return address
class WorkerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Worker
        fields = ('Education','Age','Category','Gov_id','Salary_type','Auth_ID')
    
    def create(self, validated_data):
        worker = Worker.objects.create(
            Education = validated_data['Education'],
            Age = validated_data['Age'],
            Category = validated_data['Category'],
            Gov_id = validated_data['Gov_id'],
            Salary_type = validated_data['Salary_type'],
            Auth_ID = validated_data['Auth_ID']
        )
        worker.save()
        return worker
    
    def delete(self, validated_data):
        worker = Worker.objects.get(Auth_ID=validated_data['Auth_ID'])
        worker.delete()
        return worker

    def get_id (self):
        id = Worker.objects.get(Auth_ID=self.validated_data['Auth_ID']).id
        return id

class RegisterCustomerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Customer
        fields = ('Auth_ID','Email')
    
    def create(self, validated_data):
        customer = Customer.objects.create(
            Auth_ID = validated_data['Auth_ID'],
            Email = validated_data['Email'],
        )
        try:
            customer.save()
        except:
            raise serializers.ValidationError("Wrong Data")
        return customer

    def validate(self, attrs):
        if not attrs['Email']:
            raise serializers.ValidationError("Email must be filled")
        if Customer.objects.filter(Auth_ID=attrs['Auth_ID']).exists():
            raise serializers.ValidationError("Customer already exists")
        if Customer.objects.filter(Email=attrs['Email']).exists():
            raise serializers.ValidationError("Email already exists")
        return attrs

    def get_id (self):
        id = Customer.objects.get(Auth_ID=self.validated_data['Auth_ID']).id
        return id


class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    permission_classes = (AllowAny,)
    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)

        # Add custom claims
        token['username'] = user.username
        token['Name'] = user.Name
        token['Gender'] = user.Gender
        token['Is_worker'] = user.Is_worker
        token['Is_customer'] = user.Is_customer
        
        # ...

        return token