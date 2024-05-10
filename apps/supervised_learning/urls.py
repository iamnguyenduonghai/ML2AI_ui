from django.urls import path, include

urlpatterns = [
    path('supervised_learning/', include('apps.supervised_learning.linear_reg.urls'))
]
