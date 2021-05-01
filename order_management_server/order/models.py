from django.db import models
from django.db.models.fields import CharField, DecimalField, IntegerField


class Customer(models.Model):
    name = CharField(unique=True, max_length=100)

    def _str_(self):
        return self.name


class Profitability:
    GREAT = "Rentabilidade Ótima"
    GOOD = "Rentabilidade Boa"
    BAD = "Rentabilidade Ruim"


class Product(models.Model):
    name = CharField(unique=True, max_length=100)
    price = DecimalField(max_digits=20, decimal_places=2)
    multiple = IntegerField(blank=True, null=True)

    def _str_(self):
        return self.name


def price_validator(price):
    ''' Verifies if the price is bigger than zero, and has 2 decimal places '''
    print(price)
    str_price = str(price)
    print(len(str_price.split('.')[-1]))
    if price == 0 or len(str_price.split('.')[-1]) > 2:
        raise ValueError


def compute_profitability(product_name, price):
    profitability = None
    original_price = Product.objects.find(name=product_name).price
    delta = price - original_price
    percent = original_price * 0.1

    if price > original_price:
        profitability = Profitability.GREAT

    if percent >= delta:
        profitability = Profitability.GOOD

    if price <= original_price - percent:
        profitability = Profitability.BAD

    return profitability
