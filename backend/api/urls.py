from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import (
    PersonalInfoViewSet,
    SkillViewSet,
    ProjectViewSet
)

router = DefaultRouter()
router.register(r'personal-info', PersonalInfoViewSet)
router.register(r'skills', SkillViewSet)
router.register(r'projects', ProjectViewSet)

urlpatterns = [
    path('', include(router.urls)),
]
