from django.contrib.auth.models import User
from django.shortcuts import get_object_or_404
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status,viewsets
from rest_framework.permissions import IsAuthenticated
from django.contrib.auth import authenticate,logout
from .models import Company,CompanyExpense
from .serializers import CompanySerializer,CompanyExpenseSerializer

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
    permission_classes = [IsAuthenticated]
    
    def create(self,request,*args, **kwargs):
        if not request.user.is_authenticated:
            return Response({'error': 'Authentication required'}, status=status.HTTP_401_UNAUTHORIZED)
        company_id = request.data.get('company_id')
        try:
            company = Company.objects.get(company_id=company_id)
        except Company.DoesNotExist:
            return Response({'error': 'Company not found'}, status=status.HTTP_404_NOT_FOUND)
        
        
        serializer = self.get_serializer(data=request.data)
        # print(request.data)
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
    permission_classes = [IsAuthenticated]
    
    def get(self, request, company_id, *args, **kwargs):
        try:
            company = Company.objects.get(company_id=company_id)
            distribution = company.get_expense_distribution()
            return Response(distribution, status=status.HTTP_200_OK)
        except Company.DoesNotExist:
            return Response({'error': 'Company not found'}, status=status.HTTP_404_NOT_FOUND)