from django.test import TestCase
from .models import price_validator


class APICustomerTest(TestCase):
    pass


class ModelCustomerTest(TestCase):

    def test_price_validator(self):
        price_one = 15.20
        price_two = 15.233
        price_three = 0.00

        # correct value
        price_validator(price_one)

        # incorrect values
        self.assertRaises(ValueError, price_validator, price_two)
        self.assertRaises(ValueError, price_validator, price_three)
