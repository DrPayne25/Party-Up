from django.contrib import admin
from django.urls import path, include
from rest_framework_simplejwt import views as jwt_views
from . import views

urlpatterns = [
    path('profile', views.Profile_List.as_view(), name = 'profile_list'),
    path('profile_detail', views.Profile_Detail.as_view(), name = 'profile_detail'),
    path("", views.index, name="index"),
    path("login", views.login, name="login"),
    path("logout", views.logout, name="logout"),
    path("callback", views.callback, name="callback"),
]
