from django.db import models
from django.contrib.auth.models import AbstractUser

# Create your models here.
Education_Choices = [
    ('10th','10th'),
    ('12th','12th'),
    ('B','Graduate'),
    ('D','Post Graduate'),
    ('M','Phd'),
]

salary_type = [
    ('P_D','Per Day'),
    ('P_H','Per Hour'),
]

gender_choices = [
    ('M','Male'),
    ('F','Female'),
    ('O','Other')
]
class User(AbstractUser):
    Profile_pic = models.ImageField(upload_to='profile_pic/',null=True,blank=True)
    Phone_number = models.CharField(max_length=10,null=True,blank=True)
    Gender = models.CharField(max_length=10,choices=gender_choices,null=True,blank=True)
    Is_worker = models.BooleanField(default=False)
    username = models.EmailField(unique=True,default='')
    USERNAME_FIELD = 'username'
    REQUIRED_FIELDS = []

class Address(models.Model):
    UserID = models.ForeignKey(User,on_delete=models.CASCADE)
    Area = models.CharField(max_length=100)
    City = models.CharField(max_length=50)
    State = models.CharField(max_length=50)
    Pincode = models.CharField(max_length=10)
    Default = models.BooleanField(default=False)

class Worker(models.Model):
    UserID = models.ForeignKey(User,on_delete=models.CASCADE)
    Education = models.CharField(max_length=100,null=True,blank=True,choices=Education_Choices)
    Age = models.IntegerField()
    Category = models.CharField(max_length=100)
    Gov_id = models.CharField(max_length=12,null=True,blank=True)
    Salary_type = models.CharField(max_length=100,choices=salary_type)