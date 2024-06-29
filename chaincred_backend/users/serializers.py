from rest_framework import serializers
from .models import UserProfile
from companies.models import Company
from django.contrib.auth.models import User

class SignupSerializer(serializers.ModelSerializer):
    """
    Serializer for the signup endpoint.
    """
    mobile_number = serializers.CharField(max_length=10)
    is_company = serializers.BooleanField(default=False,required=False)
    company = serializers.CharField(max_length=100, required=False)
    
    class Meta:
        model = User
        fields = ['username', 'password', 'email','mobile_number','is_company','company']
        extra_kwargs = {'password': {'write_only': True}}
        
    def create(self, validated_data):
        user = User.objects.create_user(
            username=validated_data['username'],
            email=validated_data['email'],
            password=validated_data['password']
        )
        UserProfile.objects.create(
            user = user,
            mobile_number = validated_data['mobile_number'],
            is_company = validated_data['is_company'],
            company = Company.objects.get(company_name=validated_data['company']) if validated_data['is_company'] else None
        )
        return user

class LoginSerializer(serializers.Serializer):
    """
    Serializer for the login endpoint.
    """
    username = serializers.CharField()
    password = serializers.CharField()