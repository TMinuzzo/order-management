from django.test import TestCase
from django.test import Client

from .models import price_validator


class APICustomerTest(TestCase):
    def test_customer_view(self):
        resp = self.client.get('/api/customers/')
        self.assertEqual(resp.status_code, 200)


class APIProductTest(TestCase):
    def test_order_view(self):
        resp = self.client.get('/api/products/')
        self.assertEqual(resp.status_code, 200)


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
