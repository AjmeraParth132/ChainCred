from rest_framework import serializers
from .models import Company,CompanyExpense

class CompanySerializer(serializers.ModelSerializer):
    class Meta:
        model = Company
        fields = '__all__'
        

class CompanyExpenseSerializer(serializers.ModelSerializer):
    class Meta:
        model = CompanyExpense
        fields = ['id', 'company_id','date' , 'amount', 'remarks', 'document_name','document_file','expense_bucket', 'created_at', 'updated_at']