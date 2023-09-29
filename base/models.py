from django.db import models
from django.contrib.auth.models import User


# Create your models here.

class Tag(models.Model):
    user_id = models.ForeignKey(User,on_delete = models.SET_NULL,null = True,blank = True)
    name = models.CharField(max_length = 50)

    def __str__(self):
        return self.name

class Task(models.Model):
    name = models.CharField(max_length = 100)
    description = models.TextField(max_length = 1000, null = True)
    tag = models.ForeignKey(Tag, on_delete= models.SET_NULL,null = True)
    status = models.BooleanField(default = False)
    def __str__(self):
        return self.name




    