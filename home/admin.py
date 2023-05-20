from django.contrib import admin
from .models import Worker, Address, Customer
# Register your models here.
admin.site.register(Worker)
admin.site.register(Address)
admin.site.register(Customer)