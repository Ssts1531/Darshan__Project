"""
URL configuration for Darshan_Project project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
# from django.urls import path
from MyApps1 import views
from django.urls import path,re_path

urlpatterns = [
    path('admin/', admin.site.urls),
    path('Home/', views.homepage_view),
    path('Aboutus/',views.aboutus_view),
    path('Andhra Pradesh/', views.AP_view),
    path('Contactus/', views.contactus_view),
    path('Jyotirlingam/', views.jyotirlingam_view),
    path('Karnataka/', views.KA_view),
    path('Kerala/', views.KE_view),
    path('Maharastra/', views.MH_view),
    path('Odisha/', views.OD_view),
    path('Sakthipeetam/', views.sakthipeetam_view),
    path('Tamilnadu/', views.TN_view),
    path('Telangana/', views.TG_view),


    re_path('^$', views.homepage_view),
]

