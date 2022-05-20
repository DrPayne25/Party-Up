from django.contrib import admin
from django.urls import path, include
from rest_framework_simplejwt import views as jwt_views
from .views import Profile_List, Profile_Detail, login, logout, callback

urlpatterns = [
    path('', Profile_List.as_view(), name = 'profile_list'),
    path('<int:pk>/', Profile_Detail.as_view(), name = 'profile_detail'),
    # path("", index, name="index"),
    path("login", login, name="login"),
    path("logout", logout, name="logout"),
    path("callback", callback, name="callback"),
]
