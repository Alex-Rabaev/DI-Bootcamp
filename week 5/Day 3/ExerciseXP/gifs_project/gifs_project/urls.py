"""
URL configuration for gifs_project project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.2/topics/http/urls/
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
from django.urls import path
from gifs.views import home, add_category, gif, add_gif, category, categories

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', home, name='home'),
    path('add_category/', add_category, name='add_category'),
    path('gif/<int:gif_id>/', gif, name='gif'),
    path('add_gif/', add_gif, name='add_gif'),
    path('category/<int:category_id>/', category, name='category'),
    path('categories/', categories, name='categories'),
]
