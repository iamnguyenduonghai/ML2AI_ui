from django.views import View
from django.shortcuts import render
import requests
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt


class HomeList(View):
    @classmethod
    def get(cls, request, *args, **kwargs):
        context = {}
        return render(request, 'home/home_page.html', context)
