from django.views import View
from django.shortcuts import render


class HomeList(View):
    @classmethod
    def get(cls, request, *args, **kwargs):
        context = {}
        return render(request, 'home/home_page.html', context)

