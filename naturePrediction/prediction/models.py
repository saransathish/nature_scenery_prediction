from django.db import models

# class Images(models.Model):
#     image = models.ImageField(upload_to='images/')

class photos(models.Model):
    image = models.ImageField(upload_to='images/')

