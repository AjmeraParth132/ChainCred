from rest_framework.test import APITestCase
from rest_framework import status
from django.contrib.auth.models import User
from .models import Company

class SignupViewTestCase(APITestCase):
    def setUp(self):
        self.signup_url = '/companies/signup/'
        self.user_data = {
            'user':{
                'username':'testuser',
                'email':'test@example.com',
                'password':'testpassword'
            },
            'company':{
                'company_name':'Test Company',
            }
        }
    def test_signup_success(self):
        response = self.client.post(self.signup_url, self.user_data, format='json')
        self.assertEqual(response.status_code, 201)
        self.assertIn('company_id', response.data)
    
    
        
class LoginViewTestCase(APITestCase):
    def setUp(self):
        self.login_url = '/companies/login/'
        self.user = User.objects.create_user(username='testuser',password='testpassword')
        Company.objects.create(user=self.user, company_name='Test Company')
        
    def test_login_success(self):
        credentials = {'username':'testuser','password':'testpassword'}
        response = self.client.post(self.login_url, credentials, format='json')
        self.assertEqual(response.status_code, 200)
        self.assertIn('company_id', response.data)
    
    def test_login_failure(self):
        invalid_credentials = {'username':'testuser','password':'invalidpassword'}
        response = self.client.post(self.login_url, invalid_credentials, format='json')
        self.assertEqual(response.status_code, 400)
        
class LogoutViewTestCase(APITestCase):
    def setUp(self):
        self.logout_url = '/companies/logout/'
        self.user = User.objects.create_user(username='testuser',password='testpassword')
        self.client.force_authenticate(user=self.user)
        
    def test_logout_success(self):
        response = self.client.post(self.logout_url)
        self.assertEqual(response.status_code, 200)