from django.db import models

from companies.models import Company
class Investor(models.Model):
    """
    Represents an investor in the system.

    Attributes:
        investor_id (AutoField): The unique identifier for the investor.
        investor_name (CharField): The name of the investor.
        investor_email (EmailField): The email address of the investor.
        investor_company (CharField): The company associated with the investor (optional).
        investment_focus (CharField): The focus of the investor's investments (optional).
        created_at (DateTimeField): The date and time when the investor was created.
        updated_at (DateTimeField): The date and time when the investor was last updated.
    """
    
    investor_id = models.AutoField(primary_key=True)
    investor_name = models.CharField(max_length=100)
    investor_email = models.EmailField(max_length=100, unique=True)
    investor_company = models.CharField(max_length=100, null=True, blank=True)
    investment_focus = models.CharField(max_length=100, null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    
class Investments(models.Model):
    """
    Represents an investment made by an investor in a company.

    Attributes:
        investment_id (AutoField): The primary key for the investment.
        investor_id (ForeignKey): The foreign key to the Investor model representing the investor who made the investment.
        company_id (ForeignKey): The foreign key to the Company model representing the company in which the investment was made.
        investment_date (DateField): The date on which the investment was made.
        amount_invested (DecimalField): The amount of money invested.
        investment_round (CharField): The round of investment (e.g., seed, series A, series B, series C).
        investment_type (CharField): The type of investment (e.g., angel, VC, both).
        return_on_investment (DecimalField): The return on investment.
        current_valuation (DecimalField): The current valuation of the investment.
        created_at (DateTimeField): The date and time when the investment was created.
        updated_at (DateTimeField): The date and time when the investment was last updated.
    """
    investment_id = models.AutoField(primary_key=True)
    investor_id = models.ForeignKey(Investor, on_delete=models.CASCADE)
    company_id = models.ForeignKey(Company, on_delete=models.CASCADE)
    investment_date = models.DateField()
    amount_invested = models.DecimalField(max_digits=20, decimal_places=2)
    investment_round = models.CharField(
        max_length=20,
        choices=[('seed', 'Seed'), ('series a', 'Series A'), ('series b', 'Series B'), ('series c', 'Series C')],
        default='seed'
    )
    investment_type = models.CharField(
        max_length=20,
        choices=[('angel', 'Angel'), ('vc', 'VC'), ('both', 'BOTH')],
        default='angel'
    )
    return_on_investment = models.DecimalField(max_digits=20, decimal_places=2)
    current_valuation = models.DecimalField(max_digits=20, decimal_places=2)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    
class InvestorAccessRequests(models.Model):
    """
    Represents an access request made by an investor for a specific company.

    Attributes:
        id (AutoField): The primary key for the access request.
        investor_id (ForeignKey): The foreign key to the Investor model representing the investor making the request.
        company_id (ForeignKey): The foreign key to the Company model representing the company for which the request is made.
        request_date (DateField): The date when the access request was made.
        comments (TextField): Additional comments or notes for the access request.
        status (CharField): The status of the access request. Can be one of 'pending', 'approved', or 'rejected'.
        access_duration_months (IntegerField): The duration of access granted in months.
        created_at (DateTimeField): The date and time when the access request was created.
        updated_at (DateTimeField): The date and time when the access request was last updated.
    """
    id = models.AutoField(primary_key=True)
    investor_id = models.ForeignKey(Investor, on_delete=models.CASCADE)
    company_id = models.ForeignKey(Company, on_delete=models.CASCADE)
    request_date = models.DateField()
    comments = models.TextField()
    status = models.CharField(
        max_length=20,
        choices=[('pending', 'Pending'), ('approved', 'Approved'), ('rejected', 'Rejected')],
        default='pending'
    )
    access_duration_months = models.IntegerField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)