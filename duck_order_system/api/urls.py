from django.urls import path
from rest_framework import routers
from . import views

urlpatterns = [
    path('get_customer/', views.CustomerView.as_view()),
    path('get_stuff/', views.StuffView.as_view()),
    path('get_store/', views.StoreView.as_view()),
    path('get_order/', views.OrderView.as_view()),
]
