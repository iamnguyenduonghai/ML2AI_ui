from django.urls import path
from apps.root.home.views import (
    HomeList
)

urlpatterns = [
    path('', HomeList.as_view(), name='HomeList'),
]
