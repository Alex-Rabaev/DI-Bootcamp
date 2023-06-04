from django.shortcuts import render
from .forms import GifForm, CategoryForm
from .models import Gif, Category

def home(request):
    gifs = Gif.objects.all()
    context = {'gifs': gifs}
    return render(request, 'home.html', context)

def add_gif(request):
    if request.method == 'POST':
        form = GifForm(request.POST)
        if form.is_valid():
            form.save()
            return home(request)
    else:
        form = GifForm()
    context = {'form': form}
    return render(request, 'add_gif.html', context)

def add_category(request):
    if request.method == 'POST':
        form = CategoryForm(request.POST)
        if form.is_valid():
            form.save()
            return home(request)
    else:
        form = CategoryForm()
    context = {'form': form}
    return render(request, 'add_category.html', context)

def category(request, category_id):
    category = Category.objects.get(pk=category_id)
    gifs = category.gifs.all()
    context = {'category': category, 'gifs': gifs}
    return render(request, 'category.html', context)

def categories(request):
    categories = Category.objects.all()
    context = {'categories': categories}
    return render(request, 'categories.html', context)

def gif(request, gif_id):
    gif = Gif.objects.get(pk=gif_id)
    context = {'gif': gif}
    return render(request, 'gif.html', context)