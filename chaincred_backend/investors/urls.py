from django.urls import path
from .views import SignupView, LoginView, LogoutView, InvestorInvestmentsView

urlpatterns = [
    path('signup/', SignupView.as_view(), name='signup'),
    path('login/', LoginView.as_view(), name='login'),
    path('logout/', LogoutView.as_view(), name='logout'),
    path('investments/', InvestorInvestmentsView.as_view(), name='investments'),
]