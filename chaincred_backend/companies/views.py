from django.contrib.auth.models import User
from django.shortcuts import get_object_or_404
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status,viewsets
from rest_framework.permissions import IsAuthenticated
from django.contrib.auth import authenticate,logout
from .models import Company,CompanyExpense
from .serializers import CompanySerializer,CompanyExpenseSerializer,CompanyIncomeSerializer
from datetime import datetime, timedelta

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
        company_data = request.data.get('company', {})
        user = User.objects.create_user(
            username=user_data.get('username'),
            email=user_data.get('email'),
            password=user_data.get('password')
        )
        company_data['user'] = user.id
        company_serializer = CompanySerializer(data=company_data)
        # print(user_data, company_data)
        # print(company_serializer)
        
        if company_serializer.is_valid():
            company = company_serializer.save(user=user)
            return Response({'company_id': company.company_id}, status=status.HTTP_201_CREATED)
        return Response(company_serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
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
            company = get_object_or_404(Company, user=user)
            return Response({'company_id': company.company_id}, status=status.HTTP_200_OK)
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
    

class CompanyExpenseViewSet(viewsets.ModelViewSet):
    """
    A view for managing company expenses.

    Methods:
        post: Creates a new company expense.
    """
    queryset = CompanyExpense.objects.all()
    serializer_class = CompanyExpenseSerializer
    # permission_classes = [IsAuthenticated]
    
    def create(self,request,*args, **kwargs):
        # if not request.user.is_authenticated:
        #     return Response({'error': 'Authentication required'}, status=status.HTTP_401_UNAUTHORIZED)
        company_id = request.data.get('company_id')
        # print(company_id)
        try:
            company = Company.objects.get(company_id=company_id)
        except Company.DoesNotExist:
            return Response({'error': 'Company not found'}, status=status.HTTP_404_NOT_FOUND)
        
        # print(request.data)
        serializer = self.get_serializer(data=request.data)
        # print(request.data)
        # print(serializer)
        if serializer.is_valid():
            serializer.save(company_id=company)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        
class ExpenseDistributionAPIView(APIView):
    """
    A view for getting the distribution of company expenses.

    Methods:
        get: Gets the distribution of company expenses.
    """
    # permission_classes = [IsAuthenticated]
    
    def get(self, request, company_id, *args, **kwargs):
        try:
            company = Company.objects.get(company_id=company_id)
            distribution = company.get_expense_distribution()
            return Response(distribution, status=status.HTTP_200_OK)
        except Company.DoesNotExist:
            return Response({'error': 'Company not found'}, status=status.HTTP_404_NOT_FOUND)
        
class FinanceStatementAPI(APIView):
    def post(self,request):
        company_id = request.data.get('company_id')
        current_valuation = request.data.get('current_valuation')
        try :
            company = Company.objects.get(company_id=company_id)
            company.current_valuation = current_valuation
            company.save()
        except Company.DoesNotExist:
            return Response({'error': 'Company not found'}, status=status.HTTP_404_NOT_FOUND)
        
        for month in ['month_1','month_2','month_3']:
            expense_data = {
                'company_id': company_id,
                'expense_bucket': f'{month} outflow',
                'amount': request.data.get(f"{month}_outflow"),
                'date': (datetime.now() - timedelta(days=int(month[-1])*30)).strftime('%Y-%m-%d')
            }
            income_data = {
                'company_id': company_id,
                'income_type': f'{month} inflow',
                'amount': request.data.get(f"{month}_inflow"),
                'date': (datetime.now() - timedelta(days=int(month[-1])*30)).strftime('%Y-%m-%d')
            }
            expense_serializer = CompanyExpenseSerializer(data=expense_data)
            income_serializer = CompanyIncomeSerializer(data=income_data)
            
            if expense_serializer.is_valid():
                expense_serializer.save()
            else:
                return Response(expense_serializer.errors, status=status.HTTP_400_BAD_REQUEST)
            
            if income_serializer.is_valid():
                income_serializer.save()
            else:
                return Response(income_serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        return Response({'message': 'Finance statement saved successfully'}, status=status.HTTP_201_CREATED)

class CompanyIncomeAPIView(APIView):
    def get(self,request,company_id):
        company = Company.objects.get(company_id=company_id)
        incomes = company.get_income_distribution()
        return Response(incomes, status=status.HTTP_200_OK)
    
    def post(self,request):
        # print(request.data)
        company_id = request.data.get('company_id')
        income_data = {
            'company_id': company_id,
            'income_type': request.data.get('income_type'),
            'amount': request.data.get('amount'),
            'date': request.data.get('date'),
            'remarks': request.data.get('remarks'),
            'document_name': request.data.get('document_name') if request.data.get('document_name') else '',
        }
        income_serializer = CompanyIncomeSerializer(data=income_data)
        if income_serializer.is_valid():
            income_serializer.save()
            return Response(income_serializer.data, status=status.HTTP_201_CREATED)
        return Response(income_serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
class CompanyView(APIView):
    def get(self,request,company_id):
        try:
            # company_id = request.data.get('company_id')
            # print(company_id)
            # print(request.data)
            company = Company.objects.get(company_id=company_id)
            serializer = CompanySerializer(company)
            user = serializer.data['user']
            user = User.objects.get(id=user)
            # return Response(serializer.data, status=status.HTTP_200_OK)
            return Response({
                'company': serializer.data,
                'username': user.username,
                'email': user.email
            }, status=status.HTTP_200_OK)
        except Company.DoesNotExist:
            return Response({'error': 'Company not found'}, status=status.HTTP_404_NOT_FOUND)