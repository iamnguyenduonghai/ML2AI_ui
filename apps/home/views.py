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


@csrf_exempt
def proxy_request(request):
    target_url = request.GET.get("url")

    if not target_url:
        return JsonResponse({"error": "Missing URL"}, status=400)

    user_agent = request.headers.get("User-Agent", "Mozilla/5.0")

    headers = {
        "User-Agent": user_agent
    }

    try:
        response = requests.get(target_url, headers=headers)
        return JsonResponse({"html": response.text})
    except requests.RequestException as e:
        return JsonResponse({"error": str(e)}, status=500)
