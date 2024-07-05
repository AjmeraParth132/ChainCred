from django.test import TestCase
from rest_framework.test import APIClient
from django.contrib.auth.models import User
from .models import Investor,Investments
from companies.models import CompanyExpense,Company

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
                'investment_focus':'Test Focus',
                'mobile_number':'1234567890',
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
    

class InvestorInvestmentsViewTestCase(TestCase):
    def setUp(self):
        self.user = User.objects.create_user(username='testuser',password='testpassword')
        self.investor = Investor.objects.create(user=self.user, investor_company='Test Company', investment_focus='Test Focus',mobile_number='1234567890')
        
        
        self.company_user1 = User.objects.create_user(username='companyuser1', password='companyuserpassword1')
        self.company_user2 = User.objects.create_user(username='companyuser2', password='companyuserpassword2')
        
        self.company1 = Company.objects.create(company_name='Test Company 1', user=self.company_user1)
        self.company2 = Company.objects.create(company_name='Test Company 2', user=self.company_user2)
        Investments.objects.create(investor_id=self.investor, company_id=self.company1, amount_invested=10000)
        Investments.objects.create(investor_id=self.investor, company_id=self.company2, amount_invested=20000)
        
        CompanyExpense.objects.create(company_id=self.company1, amount=5000)
        CompanyExpense.objects.create(company_id=self.company2, amount=10000)
        
        self.client.login(username='testuser',password='testpassword')
        
    def test_investor_investments(self):
        response = self.client.get('/investors/investments/')
        self.assertEqual(response.status_code, 200)
        self.assertEqual(len(response.data), 2)
        
class InvestmentExpenseDistributionTestCase(TestCase):
    def setUp(self):
        self.user = User.objects.create_user(username='testuser',password='testpassword')
        self.investor = Investor.objects.create(user=self.user, investor_company='Test Company', investment_focus='Test Focus',mobile_number='1234567890')
        
        
        self.company_user1 = User.objects.create_user(username='companyuser1', password='companyuserpassword1')
        self.company_user2 = User.objects.create_user(username='companyuser2', password='companyuserpassword2')
        
        self.company1 = Company.objects.create(company_name='Test Company 1', user=self.company_user1)
        self.company2 = Company.objects.create(company_name='Test Company 2', user=self.company_user2)
        Investments.objects.create(investor_id=self.investor, company_id=self.company1, amount_invested=10000)
        Investments.objects.create(investor_id=self.investor, company_id=self.company2, amount_invested=20000)
        
        CompanyExpense.objects.create(company_id=self.company1, amount=5000, expense_bucket='Marketing')
        CompanyExpense.objects.create(company_id=self.company1, amount=5000, expense_bucket='Operations')
        CompanyExpense.objects.create(company_id=self.company2, amount=10000, expense_bucket='Marketing')
        
        self.client.login(username='testuser',password='testpassword')
    
    def test_get_expense_distribution(self):
        url = '/investors/expense-distribution/'
        respone = self.client.get(url)
        self.assertEqual(respone.status_code, 200)