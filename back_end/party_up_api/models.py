from django.db import models
from django.contrib.auth import get_user_model

class Profile(models.Model):
  first_name = models.CharField(max_length=128)
  last_name = models.CharField(max_length=128)
  email = models.CharField(max_length=128)
  username = models.CharField(max_length=128)
  password = models.CharField(max_length=128)
  dob = models.TextField(default='mm/dd/yy')
  about_me = models.TextField(blank=True)
  currency = models.IntegerField(default=0)

  def __str__(self):
      return f'{self.username}'
