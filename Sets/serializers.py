from Sets.models import Set, Image
from rest_framework import serializers
from django.contrib.auth.models import User


class SetSerializer(serializers.ModelSerializer):

    class Meta:
        model = Set


class ImageSerializer(serializers.ModelSerializer):

    class Meta:
        model = Image


# In a perfect world this would be in a separate app.
class UserSerializer(serializers.ModelSerializer):
    sets = serializers.PrimaryKeyRelatedField(
        many=True, queryset=User.objects.all())

    class Meta:
        model = User
        fields = ('id', 'username', 'sets')
