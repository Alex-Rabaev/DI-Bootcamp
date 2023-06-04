from django.shortcuts import render
from .forms import TodoForm, CategoryForm, DoneForm
from .models import Todo, Category
from datetime import date

# Create your views here.

def add_todo_view(request) :

    # POST
    if request.method == 'POST' :
        form_filled = TodoForm(request.POST)
        if form_filled.is_valid() :
            form_filled.save()
        else:
            print(form_filled.errors)

    #  GET
    todo_form = TodoForm()
    context = {'form' : todo_form}
    return render(request, 'add_todo_view.html', context)


def add_category_view(request) :

    # POST
    if request.method == 'POST' :
        form_filled = CategoryForm(request.POST)
        if form_filled.is_valid() :
            form_filled.save()
        else:
            print(form_filled.errors)

    #  GET
    category_form = CategoryForm()
    context = {'form' : category_form}
    return render(request, 'add_category_view.html', context)




def display_todos(request) :
    # POST
    if request.method == 'POST' :
        
        data = request.POST
        todo = Todo.objects.get(id = data['instance'])
        todo.has_been_done = True
        todo.date_completion = date.today()
        todo.save()
    
    # GET
    # done_form = DoneForm()
    # category_list = Category.objects.all()
    todo_list = Todo.objects.all()
    todo_forms = []
    for todo in todo_list :
        form =DoneForm(initial={'instance': todo})
        todo_forms.append((todo, form))
    # todos_list = Todo.objects.all()
    context = {'todos_forms' : todo_forms}
    return render(request, 'todos.html', context)


