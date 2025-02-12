from django.views import View
from django.shortcuts import render


class CommentEmotionTest(View):
    @classmethod
    def get(cls, request, *args, **kwargs):
        context = {}
        return render(request, 'comment_emotion/comment_emotion_page.html', context)

