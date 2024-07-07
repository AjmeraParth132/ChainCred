from django.urls import path
from .views import SignupView, LoginView, LogoutView, InvestorInvestmentsView,InvestorExpenseDistributionView

urlpatterns = [
    path('signup/', SignupView.as_view(), name='signup'),
    path('login/', LoginView.as_view(), name='login'),
    path('logout/', LogoutView.as_view(), name='logout'),
    path('investments/', InvestorInvestmentsView.as_view(), name='investments'),
    path('expense-distribution/', InvestorExpenseDistributionView.as_view(), name='expense_distribution '),
]