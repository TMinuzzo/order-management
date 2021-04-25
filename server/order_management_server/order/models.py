from django.db import models
from django.db.models.fields import CharField, DecimalField, IntegerField


class Customer(models.Model):
    name = CharField(unique=True, max_length=100)

    def _str_(self):
        return self.name


class Product(models.Model):
    name = CharField(unique=True, max_length=100)
    price = DecimalField(max_digits=20, decimal_places=2)
    multiple = IntegerField(blank=True, null=True)

    def _str_(self):
        return self.name
