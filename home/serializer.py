from rest_framework import serializers

from .models import *

class UserSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = User
        fields = {'username','password','first_name','last_name','Profile_pic','Gender','Is_worker','Phone_number'}
        read_only_fields = ['password']
    # returns true if user is worker
    def get_is_worker(self):
        return self.Is_worker

class AddressSerializer(serializers.ModelSerializer):
    class Meta:
        model = Address
        fields = {'Area','City','State','Pincode','Default'}
class WorkerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Worker
        fields = {'Education','Age','Category','Gov_id','Salary_type','UserID'}
    
    def create(self, validated_data):
        print(validated_data)
        Worker