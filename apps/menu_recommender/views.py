from django.views import View
from django.shortcuts import render


class MenuRecommender(View):
    @classmethod
    def get(cls, request, *args, **kwargs):
        user_number = range(1, 11)
        function_name = [
            "Opportunity",
            "Quotation",
            "Sale Order",
            "Purchase Request",
            "Purchase Order",
            "Goods Receipt",
            "Goods Detail",
            "Delivery",
            "Dashboard",
            "Report Inventory"
        ]
        time_slot = range(6, 21)
        context = {'user_number': user_number, 'function_name': function_name, 'time_slot': time_slot}
        return render(request, 'menu_recommender/menu_recommender_page.html', context)
