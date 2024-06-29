from django.contrib.auth.models import User
from django.db import models

from companies.models import Company

class UserProfile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    mobile_number = models.CharField(max_length=10)
    is_company = models.BooleanField(default=False)
    company = models.ForeignKey(Company, on_delete=models.CASCADE, null=True, blank=True)
    