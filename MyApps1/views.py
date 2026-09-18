from django.shortcuts import render
from django.http import HttpResponse

#Create our views here...
def homepage_view(request):
    return render(request, 'ThirdApp/index.html')

def aboutus_view(request):
    return render(request, 'ThirdApp/aboutus.html')

def AP_view(request):
    return render(request, 'ThirdApp/Andhra Pradesh.html')

def contactus_view(request):
    return render(request, 'ThirdApp/contactus.html')

def jyotirlingam_view(request):
    return render(request, 'ThirdApp/Jyotirlingam1.html')

def KA_view(request):
    return render(request, 'ThirdApp/Karnataka.html')

def KE_view(request):
    return render(request, 'ThirdApp/Kerala.html')

def MH_view(request):
    return render(request, 'ThirdApp/Maharastra.html')

def OD_view(request):
    return render(request, 'ThirdApp/Odisha.html')

def sakthipeetam_view(request):
    return render(request, 'ThirdApp/SakthiPeetam1.html')

def TN_view(request):
    return render(request, 'ThirdApp/Tamilnadu.html')

def TG_view(request):
    return render(request, 'ThirdApp/Telangana.html')






