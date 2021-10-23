from django.urls import path
from .views import *

urlpatterns = [
    path('', index),
    path('order/', index),
    path('store/', index),
    path('login/', index),
]