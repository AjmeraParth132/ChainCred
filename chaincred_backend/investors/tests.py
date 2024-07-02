from django.test import TestCase
from rest_framework.test import APIClient
from django.contrib.auth.models import User
from .models import Investor

class SignupViewTestCase(TestCase):
    def setUp(self):
        self.client = APIClient()
        self.signup_url = '/investors/signup/'
        self.user_data = {
            'user':{
                'username':'testuser',
                'email':'test@example.com',
                'password':'testpassword'
            },
            'investor':{
                'investor_company':'Test Company',
                'investment_focus':'Test Focus'
            }
        }
    def test_signup_success(self):
        response = self.client.post(self.signup_url, self.user_data, format='json')
        # print(response.data)
        self.assertEqual(response.status_code, 201)
        self.assertIn('investor_id', response.data)
    

class LoginViewTestCase(TestCase):
    def setUp(self):
        self.client = APIClient()
        self.login_url = '/investors/login/'
        self.user = User.objects.create_user(username='testuser',password='testpassword')
        Investor.objects.create(user=self.user, investor_company='Test Company', investment_focus='Test Focus')
        
    def test_login_success(self):
        credentials = {'username':'testuser','password':'testpassword'}
        response = self.client.post(self.login_url, credentials, format='json')
        self.assertEqual(response.status_code, 200)
        self.assertIn('investor_id', response.data)
    
class LogoutViewTestCase(TestCase):
    def setUp(self):
        self.client = APIClient()
        self.logout_url = '/investors/logout/'
        self.user = User.objects.create_user(username='testuser',password='testpassword')
        self.client.force_authenticate(user=self.user)
        
    def test_logout_success(self):
        response = self.client.post(self.logout_url)
        self.assertEqual(response.status_code, 200)
    