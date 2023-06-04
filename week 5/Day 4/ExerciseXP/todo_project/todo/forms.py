from django import forms
from .models import Todo, Category

class TodoForm(forms.ModelForm) :
    class Meta:
        model = Todo
        fields = ('title', 'details', 'deadline_date', 'category')
        widgets = {
            'deadline_date' : forms.DateInput(attrs={'type': 'date'})
        }

class CategoryForm(forms.ModelForm) :
    class Meta :
        model = Category
        fields = '__all__'


class DoneForm(forms.Form) :
    instance = forms.ModelChoiceField(queryset=Todo.objects.all(), 
                                      widget = forms.HiddenInput())