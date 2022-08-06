from rest_framework import routers, serializers, viewsets
from .models import Message

class MessageSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Message
        fields = ('id', 'body', 'created_at')