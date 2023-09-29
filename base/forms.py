from django.forms import ModelForm
from .models import Task, Tag
from django.contrib.auth.models import User

class TaskForm(ModelForm):
    class Meta:
        model = Task
        fields = '__all__'

class TagForm(ModelForm):
    class Meta:
        model = Tag
        fields = '__all__'
    

