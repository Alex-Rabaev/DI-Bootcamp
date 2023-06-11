from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from django.http import HttpResponse, JsonResponse
from rest_framework.parsers import JSONParser
from rest_framework.views import APIView
from rest_framework.response import Response

# from rest_framework import status

from datetime import datetime

from .serializers import StudentSerializer
from .models import Student

# Create your views here.


class StudentView(APIView):
    def get(self, request, *args, **kwargs):
        if "pk" in kwargs:
            post = Student.objects.get(id=kwargs["pk"])
            serializer = StudentSerializer(post)
            return Response(serializer.data)
        else:
            queryset = Student.objects.all()
            serializer = StudentSerializer(queryset, many=True)
            return Response(serializer.data)
            # return Response(status=status.HTTP_404_NOT_FOUND)

    def post(self, request, *args, **kwargs):
        serializer = StudentSerializer(data=request.data)

        if serializer.is_valid():
            serializer.save()
            return Response(data=serializer.data)
        return Response(serializer.errors)

    def delete(self, request, pk, *args, **kwargs):
        post = Student.objects.get(id=pk)
        post.delete()
        return Response()

    def put(self, request, pk, *args, **kwargs):
        post = Student.objects.get(id=pk)
        serializer = StudentSerializer(post, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors)
