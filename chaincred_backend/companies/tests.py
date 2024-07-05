from rest_framework.test import APITestCase
from rest_framework import status
from django.contrib.auth.models import User
from .models import Company,CompanyExpense

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
                'mobile_number':'1234567890',
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
        

class CompanyExpenseCreateTest(APITestCase):
    def setUp(self):
        self.user = User.objects.create_user(username='testuser',password='testpassword')
        self.company = Company.objects.create(user=self.user, company_name='Test Company')
        self.client.login(username='testuser',password='testpassword')
        
    def test_create_expense(self):
        url = '/companies/company_expenses/'
        data = {
            'company_id':self.company.pk,
            'amount':1000.00,
            'remarks':'Test Expense',
            'document':None,
            'expense_bucket':'Marketing',
        }
        response = self.client.post(url, data, format='json')
        self.assertEqual(response.status_code, 201)
        self.assertEqual(CompanyExpense.objects.get().expense_bucket, 'Marketing')
        
class CompanyExpenseDistributionTest(APITestCase):
    def setUp(self):
        self.user = User.objects.create_user(username='testuser',password='testpassword')
        self.company = Company.objects.create(user=self.user, company_name='Test Company')
        self.client.login(username='testuser',password='testpassword')
        CompanyExpense.objects.create(company_id=self.company, amount=1000.00, expense_bucket='Marketing')
        CompanyExpense.objects.create(company_id=self.company, amount=500.00, expense_bucket='Operations')
        CompanyExpense.objects.create(company_id=self.company, amount=500.00, expense_bucket='Development')
        CompanyExpense.objects.create(company_id=self.company, amount=1000.00, expense_bucket='HR')
        self.url = f'/companies/expense-distribution/{self.company.company_id}/'
        
    def test_expense_distribution(self):
        
        response = self.client.get(self.url)
        self.assertEqual(response.status_code, 200)

