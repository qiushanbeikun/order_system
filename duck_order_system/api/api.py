from .models import *
from rest_framework import viewsets, permissions
from .serializers import *


# ViewSets


class OrderViewSet(viewsets.ModelViewSet):
    queryset = Order.objects.all()

    permission_classes = [
        permissions.IsAuthenticated
    ]

    serializer_class = OrderSerializer


class CustomerViewSet(viewsets.ModelViewSet):
    permission_classes = [
        permissions.IsAuthenticated
    ]

    serializer_class = CustomerSerializer

    def get_queryset(self):
        return self.request.user.first_name

    def perform_create(self, serializer):
        serializer.save(customer_user=self.request.user)


class StuffViewSet(viewsets.ModelViewSet):
    queryset = Stuff

    permission_classes = [
        permissions.IsAuthenticated
    ]

    serializer_class = StuffSerializer


class StoreViewSet(viewsets.ModelViewSet):
    queryset = Store

    permission_classes = [
        permissions.IsAuthenticated
    ]

    serializer_class = StoreSerializer

