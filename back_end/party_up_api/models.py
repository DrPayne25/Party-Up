from django.db import models

class Profile(models.Model):
  logged_in = models.BooleanField(default=False)
  first_name = models.CharField(max_length=128)
  last_name = models.CharField(max_length=128)
  email = models.CharField(max_length=128)
  username = models.CharField(max_length=128)
  steamID = models.IntegerField(default=0)
  posts = models.CharField(max_length=128, default='Please enter something')
  password = models.CharField(max_length=128)
  dob = models.DateField()
  about_me = models.TextField(blank=True)
  currency = models.IntegerField(default=0)
  profile_complete = models.BooleanField(default=False)

  def __str__(self):
      return f'{self.username}'
