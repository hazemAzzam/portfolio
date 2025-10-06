from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import (
    PersonalInfoView,
    SkillViewSet,
    ProjectViewSet
)

router = DefaultRouter()
router.register(r'skills', SkillViewSet)
router.register(r'projects', ProjectViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path('personal-info/', PersonalInfoView.as_view(), name='personal-info'),
]
