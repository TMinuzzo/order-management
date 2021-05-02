from django.db import models
from django.db.models.fields import CharField, DecimalField, IntegerField


class Customer(models.Model):
    name = CharField(unique=True, max_length=100)

    class Meta:
        app_label = 'order'

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

    class Meta:
        app_label = 'order'

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
    ''' Given a product name and a new price, search for the original price on database and compute the profitability
    The Profitability is GREAT if the new price is bigger than the original
    The Profitability is GOOD if the new price is up to 10% lower than the original
    The Profitability is BAD if the new price is less than the original price - 10%
    '''
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
