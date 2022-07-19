from django.urls import path
from . import views

urlpatterns = [
    path('products/', views.getProducts, name="routes"),
    path('products/<str:pk>', views.getProduct, name="product"),
]