from django.contrib import auth
from django.contrib.auth.models import User
from django.db.models import Q
from django.shortcuts import render
from django.utils.decorators import method_decorator
from django.views.decorators.csrf import csrf_protect, ensure_csrf_cookie
from rest_framework import permissions
from rest_framework.response import Response
from rest_framework.views import APIView

from api.models import *


@method_decorator(csrf_protect, name='dispatch')
class CreateCustomerView(APIView):
    permission_classes = [permissions.AllowAny]

    def post(self, request, format=None):

        data = self.request.data
        username = data['username']
        phone = data['phone']
        password = data['password']
        confirm_password = data['confirm_password']

        if password == confirm_password:
            try:
                if Customer.objects.filter(Q(customer_user__email=username) | Q(phone=phone)).exists():
                    return Response({'error': 'This email or phone number has already been registered.'})
                else:
                    # TODO: there might be front end API for password strength check
                    if len(password) < 6:
                        return Response({'error': 'Password length must be greater than 6.'})
                    else:
                        user = User.objects.create_user(username=username, password=password, email=username)
                        user.save()

                        user = User.objects.get(username=username)
                        customer = Customer.objects.create(customer_user=user, phone=phone)
                        customer.save()

                        return Response({'success': 'Sign up successful. You can return to login page now.'})
            except:
                return Response({'error': 'Registration failed, please try again later.'})
        else:
            return Response({'error': 'Password do not match.'})


@method_decorator(csrf_protect, name='dispatch')
class CheckAuthenticatedView(APIView):
    def get(self, request, format=None):
        try:
            if User.is_authenticated:
                return Response({'isAuthenticated': 'success'})
            else:
                return Response({'isAuthenticated': 'error'})
        except:
            return Response({'error': 'something went wrong when checking authentication, please try again later.'})


@method_decorator(csrf_protect, name='dispatch')
class LoginView(APIView):
    permission_classes = [permissions.AllowAny]

    def post(self, request, format=None):
        data = self.request.data

        username = data['username']
        password = data['password']

        user = auth.authenticate(username=username, password=password)

        if user is not None:
            auth.login(request, user)
            return Response({'success': 'User authenticated', 'username': username})
        else:
            return Response({'error': 'Authentication failed.'})


@method_decorator(csrf_protect, name='dispatch')
class LogoutView(APIView):

    def post(self, request, format=None):
        try:
            auth.logout(request)
            return Response({'success': 'Logged Out'})
        except:
            return Response({'error': 'something went wrong when logging out.'})


@method_decorator(ensure_csrf_cookie, name='dispatch')
class GetCsrfToken(APIView):
    permission_classes = [permissions.AllowAny]

    def get(self, request, format=None):
        return Response({'success': 'CSRF cookies set.'})
