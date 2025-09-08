from django.shortcuts import render
from django.http import JsonResponse


# Create your views here.

def test(request):
    return JsonResponse({"message": "Hello from Django!",
                         "data": "Sample data from home page"})

def about(request):
    return JsonResponse({"message": "Hello from Django!",
                         "data": "Sample data from about page"})
def contact(request):
    return JsonResponse({"message": "Hello from Django!",
                         "data": "Sample data from contact page"})
