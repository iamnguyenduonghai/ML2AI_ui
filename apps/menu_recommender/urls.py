from django.urls import path
from apps.menu_recommender.views import (
    MenuRecommender
)

urlpatterns = [
    path('demo', MenuRecommender.as_view(), name='MenuRecommender'),
]
