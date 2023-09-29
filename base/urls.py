from django.urls import path
from . import views


urlpatterns  = [
path('', views.home, name ='home')
, path('profile/', views.userProfile, name = 'user-profile')
, path('login/', views.userLogin, name = 'login')
, path('register/', views.userRegister, name = 'register')
,
]