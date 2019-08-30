from django.core.management.base import (
    BaseCommand, CommandError
)

from grid.models import Product
import random
import decimal


class Command(BaseCommand):

    def add_arguments(self, parser):
        parser.add_argument('--range', type=int, required=False, default=1000)

    def handle(self, *args, **options):
        try:
            for i in range(1, options.get('range') + 1):
                product_name = f'[test]-product-{i}'
                Product.objects.create(
                    name=product_name,
                    desc=f'product-{i}-descptiion',
                    cost=decimal.Decimal(random.randrange(100, 500)) / 100,
                    rating=random.randrange(0, 10),
                    count=random.randrange(0, 100)
                )
                self.stdout.write(
                    self.style.SUCCESS(product_name)
                )
        except Exception as err:
            raise CommandError(err)
