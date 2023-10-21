from django.shortcuts import render, redirect
from .models import *
from .forms import *
from django.contrib.auth.decorators import login_required

from django.contrib.auth import authenticate, login, logout
from django.contrib import messages
# from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth.models import User


# Create your views here.
def home(request):
    # tasks = Task.objects.get(user_id == request.user.id)
    context = {}
    return render (request, 'base/home.html', context = context)

@login_required(login_url = 'user-login')
def userProfile(request):

    task_form = TaskForm()

    tags = Tag.objects.filter( user_id = request.user.id)
    # tasks = Task.objects.filter( Tag.objects.filter(user_id  = request.user.id).user_id = request.user.id)
                            # filter( user_id == request.user.id)
    context = {'tags':tags, 'task_form':task_form}
                # , 'check_data': request.user.id}

    return render (request, 'base/profile.html', context = context)

def loginPage(request):
    page = 'login'
    form = UserForm()
    print('login page started')
    context = {'page':page, 'form':form}

    if request.user.is_authenticated:
        return redirect('home')

    if request.method == 'POST':
        email = request.POST.get('username')
        password = request.POST.get('password')

        try:
            user = User.objects.get(username = username)
        except:
            messages.error(request, 'User does not exist')
            return render(request, 'base/login_register.html', context=context)

            
        user = authenticate(request, username = username, password= password)

        if user is not None:
            print("User authenticated:", user)
            login(request, user)
            print("User logged in:", user)
            return redirect ('home')
        else:
            messages.error(request, 'email or password is not valid')

    context = {'page':page, 'form':form}
    return render(request, 'base/login_register.html', context = context)

def userRegister(request):
    page = 'register'
    form = UserCreationForm()

    if request.method == 'POST':
        form = UserCreationForm(request.POST)
        if form.is_valid():
            user = form.save(commit = False)
            user.email = user.email.lower()
            user.save()

            login(request, user)

            return redirect('home')
        else:
            messages.error(request,'An error occured during registration')
        
    context = {'page':page,'form':form}
    return render(request, 'base/login_register.html',context = context)

def userLogout(request):
    logout(request)
    return redirect('home')