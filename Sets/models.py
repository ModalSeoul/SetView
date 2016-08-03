from __future__ import unicode_literals

from django.db import models


class Image(models.Model):
    source = models.ImageField(upload_to='imgs')
    caption = models.CharField(max_length=64)

    def __str__(self):
        return self.caption


class Set(models.Model):
    helmet = models.CharField(max_length=24)
    chest = models.CharField(max_length=24)
    hands = models.CharField(max_length=24)
    legs = models.CharField(max_length=24)
    feet = models.CharField(max_length=24)
    rating = models.IntegerField(default=0)
    title = models.CharField(max_length=24)
    staff_pick = models.BooleanField(default=False)
    images = models.ManyToManyField(Image)

    def __str__(self):
        return self.title
