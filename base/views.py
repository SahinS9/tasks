from django.shortcuts import render
from .models import *

# Create your views here.
def home(request):
    context = {}
    return render (request, 'base/home.html', context = context)


def userProfile(request):

    tags = Tag.objects.all()
    context = {'tags':tags}
    return render (request, 'base/profile.html', context = context)

