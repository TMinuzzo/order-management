from django.shortcuts import render
from rest_framework import viewsets

from .models import Customer, Product
from .serializers import CustomerSerializer, ProductSerializer


class CustomerView(viewsets.ModelViewSet):
    ''' Returns all customers '''
    serializer_class = CustomerSerializer
    queryset = Customer.objects.all()


class ProductView(viewsets.ModelViewSet):
    ''' Returns all products '''
    serializer_class = ProductSerializer
    queryset = Product.objects.all()
