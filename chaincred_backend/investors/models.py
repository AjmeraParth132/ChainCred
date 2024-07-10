from django.db import models
from django.contrib.auth.models import User

class Investor(models.Model):
    
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    mobile_number = models.CharField(max_length=10)
    investor_id = models.AutoField(unique=True, primary_key=True)
    mobile_number = models.CharField(max_length=10, null=True, blank=True)
    investor_company = models.CharField(max_length=100, null=True, blank=True)
    investment_focus = models.CharField(max_length=100, null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)  
    
class Investments(models.Model):
   
    id = models.AutoField(primary_key=True)
    investor_id = models.ForeignKey(Investor, on_delete=models.CASCADE)
    # company_id = models.ForeignKey(Company, on_delete=models.CASCADE)
    # investment_date = models.DateField()
    comapny_name = models.CharField(max_length=100, null=True, blank=True)
    amount = models.DecimalField(max_digits=20, decimal_places=2, null=True, blank=True)
    CEO = models.CharField(max_length=100, null=True, blank=True)
    date = models.DateField(null=True, blank=True)
    valuation = models.DecimalField(max_digits=20, decimal_places=2, null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)