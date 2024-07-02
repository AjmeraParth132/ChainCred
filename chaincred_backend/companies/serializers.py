from rest_framework import serializers
from .models import Company,CompanyExpense

class CompanySerializer(serializers.ModelSerializer):
    class Meta:
        model = Company
        fields = '__all__'
        

class CompanyExpenseSerializer(serializers.ModelSerializer):
    class Meta:
        model = CompanyExpense
        fields = ['id', 'company_id', 'document_name', 'document_type', 'amount', 'remarks', 'document_file', 'is_shared_with_investors', 'created_at', 'updated_at']