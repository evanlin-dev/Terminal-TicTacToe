from django.urls import path
from .views import messages, message_edit

urlpatterns = [
    path('messages/', messages, name='messages'),
    path('messages/<int:pk>/', message_edit, name='message_edit'),
]