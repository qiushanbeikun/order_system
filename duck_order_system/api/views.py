from django.shortcuts import render
from django.http import HttpResponse
from django.utils.decorators import method_decorator
from rest_framework import generics, status, permissions
from rest_framework.views import APIView
from rest_framework.response import Response
from .models import *
from .serializers import *
from django.db.models import Q
from django.views.decorators.csrf import ensure_csrf_cookie, csrf_protect


class CustomerView(generics.ListAPIView):
    permission_classes = [permissions.AllowAny]
    queryset = Customer.objects.all()
    serializer_class = CustomerSerializer
    http_method_names = ['get', 'post', 'head']


class StuffView(generics.CreateAPIView):
    queryset = Stuff.objects.all()
    serializer_class = StuffSerializer


class StoreView(generics.CreateAPIView):
    queryset = Store.objects.all()
    serializer_class = StoreSerializer


class OrderView(generics.CreateAPIView):
    queryset = Order.objects.all()
    serializer_class = OrderSerializer


class CreateOrderView(APIView):
    serializer_class = CreateOrderSerializer

    def post(self, request, format=None):
        if not self.request.session.exists(self.request.session.session_key):
            self.request.session.create()

        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            fields = serializer.data.field_name

            new_order = Order.objects.create(customer=fields)
            new_order.save()

        return Response(OrderSerializer(new_order).data, status=status.HTTP_200_OK)


