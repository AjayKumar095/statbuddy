from django.shortcuts import render
from django.http import JsonResponse



# Create your views here.

def test(request):
    return JsonResponse({"message": "Hello from Django!",
                         "data": "Sample data from backend"})


