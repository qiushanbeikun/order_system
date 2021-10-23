from django.urls import path
from rest_framework import routers
from .views import *
from .api import *

# all urls here are define after api/

router = routers.DefaultRouter()
router.register('api_order', OrderViewSet, 'order')
router.register('api_customer', CustomerViewSet, 'customer')
router.register('api_stuff', StuffViewSet, 'stuff')
router.register('api_store', StoreViewSet, 'store')

urlpatterns = [
    path('get_customer/', CustomerView.as_view()),
    path('get_stuff/', StuffView.as_view()),
    path('get_store/', StoreView.as_view()),
    path('get_order/', OrderView.as_view()),
] + router.urls
