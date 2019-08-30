from django.db import models


class Product(models.Model):

    name = models.CharField(
        max_length=255,
        default='No Name'
    )

    cost = models.DecimalField(
        max_digits=12,
        decimal_places=2,
        default=0.0,
    )

    desc = models.CharField(
        max_length=255,
        default='No Description'
    )

    rating = models.IntegerField(
        default=0,
    )

    count = models.IntegerField(
        default=0,
    )

    def __str__(self):
        return self.name
