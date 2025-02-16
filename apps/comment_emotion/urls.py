from django.urls import path
from apps.comment_emotion.views import (
    CommentEmotion
)

urlpatterns = [
    path('test', CommentEmotion.as_view(), name='CommentEmotion'),
]
