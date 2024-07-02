from django.urls import path,include
from .views import SignupView, LoginView, LogoutView,CompanyExpenseViewSet
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register(r'', CompanyExpenseViewSet, basename='company_expenses')

urlpatterns = [
    path('signup/', SignupView.as_view(), name='signup'),
    path('login/', LoginView.as_view(), name='login'),
    path('logout/', LogoutView.as_view(), name='logout'),
    path('company_expenses/', include(router.urls)),
]