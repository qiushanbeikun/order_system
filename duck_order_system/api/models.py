from django.db import models
from django.contrib.auth.models import User
from django.conf import settings


class Customer(models.Model):
    phone = models.CharField(max_length=20)
    customer_user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)

    class Meta:
        managed = True


class Order(models.Model):
    customer = models.ForeignKey(Customer, models.DO_NOTHING)
    store = models.ForeignKey('Store', models.DO_NOTHING)
    status = models.CharField(max_length=10)
    pick_up_time = models.DateTimeField()
    order_time = models.DateTimeField()
    half_duck = models.IntegerField()
    duck = models.IntegerField()
    source = models.IntegerField()
    wrap = models.IntegerField()
    sides = models.IntegerField()
    combo = models.IntegerField()

    class Meta:
        managed = True


class Store(models.Model):
    name = models.CharField(max_length=50)
    address = models.CharField(max_length=100)
    business_start = models.CharField(max_length=4)
    business_end = models.CharField(max_length=4)

    class Meta:
        managed = True


class Stuff(models.Model):
    first_name = models.CharField(max_length=20)
    last_name = models.CharField(max_length=20)
    is_supervisor = models.BooleanField()
    store = models.ForeignKey(Store, models.DO_NOTHING)
    stuff_user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)

    class Meta:
        managed = True
