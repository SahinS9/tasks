from django.shortcuts import render
from .models import *
from .forms import *

# Create your views here.
def home(request):
    context = {}
    return render (request, 'base/home.html', context = context)

@login_required(login_url = 'login')
def userProfile(request):

    task_form = TaskForm()

    tags = Tag.objects.all()
    context = {'tags':tags, 'task_form':task_form}
    return render (request, 'base/profile.html', context = context)

def userLogin(request):
    pass

def userLogout(request):
    pass

def userRegister(request):
    pass
