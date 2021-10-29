from django.urls import path, include, re_path
from django.views.generic import TemplateView
from rest_framework import routers
from .views import *


# parent dir 'auth'
urlpatterns = [
    path('csrf_cookie/', GetCsrfToken.as_view()),
    path('register/', CreateCustomerView.as_view()),
    path('login/', LoginView.as_view()),
    path('logout/', LogoutView.as_view()),
    path('authenticated/', CheckAuthenticatedView.as_view()),
]
