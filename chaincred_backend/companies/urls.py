from django.urls import path,include
from .views import SignupView, LoginView, LogoutView,CompanyExpenseViewSet,ExpenseDistributionAPIView,FinanceStatementAPI,CompanyIncomeAPIView,CompanyView
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register(r'', CompanyExpenseViewSet, basename='company_expenses')

urlpatterns = [
    path('signup/', SignupView.as_view(), name='signup'),
    path('login/', LoginView.as_view(), name='login'),
    path('logout/', LogoutView.as_view(), name='logout'),
    path('company_expenses/', include(router.urls)),
    path('expense-distribution/<int:company_id>/', ExpenseDistributionAPIView.as_view(), name='expense_distribution'),
    path('otf/', FinanceStatementAPI.as_view(), name='otf'),
    path('income/', CompanyIncomeAPIView.as_view(), name='income'),
    path('get_company/<int:company_id>/', CompanyView.as_view(), name='get_company'),
    path('income/<int:company_id>/', CompanyIncomeAPIView.as_view(), name='income'),
]