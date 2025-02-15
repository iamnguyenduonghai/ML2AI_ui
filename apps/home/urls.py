from django.urls import path
from apps.home.views import HomeList

urlpatterns = [
    path('', HomeList.as_view(), name='HomeList'),
]
