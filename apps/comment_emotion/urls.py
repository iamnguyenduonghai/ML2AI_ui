from django.urls import path
from apps.comment_emotion.views import (
    CommentEmotionTest
)

urlpatterns = [
    path('test', CommentEmotionTest.as_view(), name='CommentEmotionTest'),
]
