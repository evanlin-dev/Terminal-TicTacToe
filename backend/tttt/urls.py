from django.urls import path
from . import views
from .views import messages, message_edit

urlpatterns = [
    path('', views.index, name='index'),
    path('<str:room_name>/', views.room, name='room'),
    path('messages/', messages, name='messages'),
    path('messages/<int:pk>/', message_edit, name='message_edit'),
]