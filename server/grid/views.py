from grid.models import Product
from django.shortcuts import get_object_or_404
from grid.serializers import ProductSerializers
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status


class ProductList(APIView):

    def get(self, request, format=None):
        snippets = Product.objects.all()
        serializer = ProductSerializers(snippets, many=True)
        return Response(serializer.data)

    def post(self, request, format=None):
        serializer = ProductSerializers(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class ProductDetail(APIView):

    def get(self, request, pk, format=None):
        snippet = get_object_or_404(Product, pk=pk)
        serializer = ProductSerializers(snippet)
        return Response(serializer.data)

    def delete(self, request, pk, format=None):
        snippet = get_object_or_404(Product, pk=pk)
        snippet.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

    def put(self, request, pk):
        snippet = get_object_or_404(Product, pk=pk)
        serializer = ProductSerializers(snippet, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
