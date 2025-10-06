from rest_framework import viewsets, status
from rest_framework.decorators import action
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticatedOrReadOnly
from .models import PersonalInfo, Skill, Project
from .serializers import (
    PersonalInfoSerializer, 
    SkillSerializer, 
    ProjectSerializer
)


class PersonalInfoViewSet(viewsets.ModelViewSet):
    queryset = PersonalInfo.objects.all()
    serializer_class = PersonalInfoSerializer
    # permission_classes = [IsAuthenticatedOrReadOnly]


class SkillViewSet(viewsets.ModelViewSet):
    queryset = Skill.objects.all()
    serializer_class = SkillSerializer
    # permission_classes = [IsAuthenticatedOrReadOnly]


class ProjectViewSet(viewsets.ModelViewSet):
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer
    # permission_classes = [IsAuthenticatedOrReadOnly]
    
    @action(detail=True, url_path='toggle-featured', methods=['post'])
    def toggle_featured(self, request, pk=None):
        """
        Toggle the featured status of a project.
        """
        project = self.get_object()
        project.featured = not project.featured
        project.save()
        
        return Response({
            'id': project.id,
            'title': project.title,
            'featured': project.featured,
            'message': f'Project "{project.title}" is now {"featured" if project.featured else "not featured"}'
        }, status=status.HTTP_200_OK)
