from django.urls import path
from .views import *

urlpatterns = [
    path('home/', index),

    path('order/', index),
    path('store/', index),
]