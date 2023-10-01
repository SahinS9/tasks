from django.forms import ModelForm
from .models import *
from django.contrib.auth.models import User
from django.contrib.auth.forms import UserCreationForm

class TaskForm(ModelForm):
    class Meta:
        model = Task
        fields = '__all__'

class TagForm(ModelForm):
    class Meta:
        model = Tag
        fields = '__all__'
    
class UserForm(ModelForm):
    class Meta:
        model = User
        fields = ['email']

class UserCreationForm(UserCreationForm):
    class Meta:
        model = User
        fields = ['username','email','password1','password2']

# class ProfileForm(ModelForm):
#     class Meta:
#         model = Profile
#         fields = ['email']