from django.contrib import admin
from django.urls import path, include
from rest_framework_simplejwt import views as jwt_views
from .views import Profile_Detail, Profile_List

urlpatterns = [
    # path('admin/', admin.site.urls),
    path('/', Profile_List.as_view(), name = 'profile_list'),
    path('/', Profile_Detail.as_view(), name = 'profile_detail'),
]
