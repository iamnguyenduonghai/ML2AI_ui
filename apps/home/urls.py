from django.urls import path
from apps.home.views import HomeList, proxy_request

urlpatterns = [
    path('homepage', HomeList.as_view(), name='HomeList'),
    path("proxy", proxy_request, name="proxy_request"),
]
