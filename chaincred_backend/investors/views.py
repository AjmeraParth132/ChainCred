from django.contrib.auth.models import User
from django.shortcuts import get_object_or_404
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.permissions import IsAuthenticated
from django.contrib.auth import authenticate,logout
from .models import Investor,Investments
from companies.models import CompanyExpense,Company
from .serializers import InvestorSerializer
from companies.serializers import CompanyExpenseSerializer,CompanySerializer

class SignupView(APIView):
    """
    A view for signing up a new investor.

    Methods:
        post: Creates a new investor.
    """
    def post(self, request,*args, **kwargs):
        """
        Creates a new investor.

        Args:
            request (Request): The HTTP request.

        Returns:
            Response: The HTTP response.
        """
        user_data = request.data.get('user', {})
        investor_data = request.data.get('investor', {})
        user = User.objects.create_user(
            username=user_data.get('username'),
            email=user_data.get('email'),
            password=user_data.get('password')
        )
        investor_data['user'] = user.id
        investor_serializer = InvestorSerializer(data=investor_data)
        # print(user_data, investor_data)
        # print(investor_serializer)
        if investor_serializer.is_valid():
            investor = investor_serializer.save(user=user)
            # token = Token.objects.create(user=user)
            return Response({'investor_id': investor.investor_id}, status=status.HTTP_201_CREATED)
        return Response(investor_serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
class LoginView(APIView):
    """
    A view for logging in an investor.

    Methods:
        post: Logs in an investor.
    """
    def post(self, request,*args, **kwargs):
        """
        Logs in an investor.

        Args:
            request (Request): The HTTP request.

        Returns:
            Response: The HTTP response.
        """
        username = request.data.get('username')
        password = request.data.get('password')
        user = authenticate(username=username, password=password)
        if user:
            investor = get_object_or_404(Investor, user=user)
            return Response({'investor_id': investor.investor_id}, status=status.HTTP_200_OK)
        return Response({'error': 'Invalid credentials'}, status=status.HTTP_400_BAD_REQUEST)

class LogoutView(APIView):
    """
    A view for logging out an investor.

    Methods:
        post: Logs out an investor.
    """
    def post(self, request,*args, **kwargs):
        """
        Logs out an investor.

        Args:
            request (Request): The HTTP request.

        Returns:
            Response: The HTTP response.
        """
        logout(request)
        return Response({'message': 'Logged out successfully'}, status=status.HTTP_200_OK)
    
class InvestorInvestmentsView(APIView):
    permission_classes = [IsAuthenticated]
    
    def get(self,request):
        investor = get_object_or_404(Investor, user=request.user)
        investments = Investments.objects.filter(investor_id=investor)
        data = []
        for investment in investments:
            company = investment.company_id
            expenses = CompanyExpense.objects.filter(company_id=company)
            company_data = CompanySerializer(company).data
            expenses_data = CompanyExpenseSerializer(expenses, many=True).data
            
            data.append({
                'company': company_data,
                'expenses': expenses_data
            })
        return Response(data, status=status.HTTP_200_OK)
    
class InvestorExpenseDistributionView(APIView):
    permission_classes = [IsAuthenticated]
    
    def get(self,request):
        user = request.user
        investor = get_object_or_404(Investor, user=user)
        investments = Investments.objects.filter(investor_id=investor)
        
        expense_distributions = {}
        for investment in investments:
            company = investment.company_id
            expense_distribution = company.get_expense_distribution()
            expense_distributions[company.company_name] = expense_distribution
        return Response(expense_distributions, status=status.HTTP_200_OK)