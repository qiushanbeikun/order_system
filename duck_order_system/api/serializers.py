from rest_framework import serializers
from .models import *


class CustomerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Customer
        fields = '__all__'


class StuffSerializer(serializers.ModelSerializer):
    class Meta:
        model = Stuff
        fields = '__all__'


class StoreSerializer(serializers.ModelSerializer):
    class Meta:
        model = Store
        fields = '__all__'


class OrderSerializer(serializers.ModelSerializer):
    class Meta:
        model = Order
        fields = '__all__'


class CreateOrderSerializer(serializers.ModelSerializer):
    class Meta:
        model = Order
        fields = '__all__'

