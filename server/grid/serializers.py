from rest_framework.serializers import ModelSerializer
from grid.models import Product


class ProductSerializers(ModelSerializer):
    class Meta:
        model = Product
        fields = ['id', 'name', 'cost', 'desc', 'rating', 'count']
