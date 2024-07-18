from django.db import models
from django.contrib.auth.models import User

class Company(models.Model):
    """
    Represents a company in the system.

    Attributes:
        company_id (AutoField): The primary key for the company.
        company_name (CharField): The name of the company.
        company_logo (ImageField): The logo of the company.
        company_website (URLField): The website URL of the company.
        founding_date (DateField): The date when the company was founded.
        industry (CharField): The industry of the company.
        current_valuation (DecimalField): The current valuation of the company.
        previous_valuation (DecimalField): The previous valuation of the company.
        funding_stage (CharField): The funding stage of the company.
        runway_status (CharField): The status of the company's runway.
        created_at (DateTimeField): The date and time when the company was created.
        updated_at (DateTimeField): The date and time when the company was last updated.
    """
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    mobile_number = models.CharField(max_length=10, null=True, blank=True)
    company_id = models.AutoField(primary_key=True, unique=True)
    company_name = models.CharField(max_length=100, null=True, blank=True)
    company_logo = models.ImageField(upload_to='company_logos/', blank=True, null=True)
    company_website = models.URLField(max_length=200, blank=True, null=True)
    founding_date = models.DateField(blank=True, null=True)
    company_address = models.CharField(max_length=100, null=True, blank=True)
    number_of_employees = models.IntegerField(null=True, blank=True)
    industry = models.CharField(max_length=100, null=True, blank=True)
    current_valuation = models.DecimalField(max_digits=20, decimal_places=2, null=True, blank=True)
    previous_valuation = models.DecimalField(max_digits=20, decimal_places=2, null=True, blank=True)
    funding_stage = models.CharField(
        max_length=20,
        choices=[('pre-seed', 'Pre-Seed'), ('seed', 'Seed'), ('series a', 'Series A'), ('series b', 'Series B'), ('series c', 'Series C')],
        default='pre-seed'
    )
    runway_status = models.CharField(max_length=100,blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    
    def get_expense_distribution(self):
        
        expenses = CompanyExpense.objects.filter(company_id=self.company_id)
        
        categoriesed_expenses = {}
        for expense in expenses:
            bucket = expense.expense_bucket
            amount = expense.amount
            if bucket in categoriesed_expenses:
                categoriesed_expenses[bucket] += amount
            else:
                categoriesed_expenses[bucket] = amount
        
        total_expenses = sum(categoriesed_expenses.values())
        percentage_distribution = {category : float((amount/total_expenses)*100) for category, amount in categoriesed_expenses.items()}
        
        threshold = 1
        for category, percentage in percentage_distribution.items():
            if percentage < threshold:
                percentage_distribution['Others'] = percentage_distribution.get('Others', 0) + percentage
                del percentage_distribution[category]
        
        return percentage_distribution
    

class CompanyIncome(models.Model):
    
    id = models.AutoField(primary_key=True)
    company_id = models.ForeignKey(Company, on_delete=models.CASCADE)
    income_type = models.CharField(max_length=50,null=True,blank=True)
    amount = models.DecimalField(max_digits=20,decimal_places=2,blank=True,null=True)
    date = models.DateField(null=True,blank=True)
    remarks = models.TextField(null=True,blank=True)
    document_name = models.CharField(null=True,blank=True,max_length=50)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    
class CompanyExpense(models.Model):
    """
    Represents the documents associated with a company.

    Attributes:
        id (AutoField): The primary key for the document.
        company_id (ForeignKey): The foreign key to the associated Company model.
        document_name (CharField): The name of the document.
        document_type (CharField): The type of the document.
        document_file (FileField): The file field to store the document file.
        is_shared_with_investors (BooleanField): Indicates if the document is shared with investors.
        created_at (DateTimeField): The date and time when the document was created.
        updated_at (DateTimeField): The date and time when the document was last updated.
    """

    id = models.AutoField(primary_key=True)
    company_id = models.ForeignKey(Company, on_delete=models.CASCADE)
    expense_bucket = models.CharField(max_length=100, null=True, blank=True)
    document_name = models.CharField(max_length=100, null=True, blank=True)
    amount = models.DecimalField(max_digits=20, decimal_places=2, null=True, blank=True)
    remarks = models.TextField(null=True, blank=True)
    document_file = models.FileField(upload_to='company_documents/', null=True, blank=True)
    date = models.DateField(null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    
class CompanyInvestors(models.Model):
    id = models.AutoField(primary_key=True)
    company_id = models.ForeignKey(Company, on_delete=models.CASCADE)
    investor_name = models.CharField(max_length=100, null=True, blank=True)
    amount = models.DecimalField(max_digits=20, decimal_places=2, null=True, blank=True)
    valuation = models.DecimalField(max_digits=20, decimal_places=2, null=True, blank=True)
    
