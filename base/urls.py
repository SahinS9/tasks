from django.urls import path
from . import views


urlpatterns  = [
path('', views.home, name ='home')
, path('profile/', views.userProfile, name = 'user-profile')
, path('register/', views.userRegister, name = 'user-register')
, path('login/', views.loginPage, name = 'user-login')
, path('logout/', views.userLogout, name = 'user-logout')

]