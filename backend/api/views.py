from rest_framework import viewsets, status
from rest_framework.decorators import action
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.permissions import IsAuthenticatedOrReadOnly
from rest_framework.authentication import SessionAuthentication
from .models import PersonalInfo, Skill, Project
from .serializers import (
    PersonalInfoSerializer, 
    SkillSerializer, 
    ProjectSerializer
)
from .authentication import APIKeyAuthentication


class PersonalInfoView(APIView):
    """
    API view for PersonalInfo - GET and UPDATE operations only.
    Since there will always be only one PersonalInfo object.
    """
    
    def get(self, request):
        """
        Get the single PersonalInfo object. Return empty object if none exists.
        """
        try:
            personal_info = PersonalInfo.objects.first()
            if not personal_info:
                # Return empty/default PersonalInfo structure
                return Response({
                    'id': None,
                    'name': '',
                    'proffessional_title': '',
                    'email': '',
                    'phone': '',
                    'address': '',
                    'bio': '',
                    'image': '',
                    'linkedin': '',
                    'github': ''
                })
            
            serializer = PersonalInfoSerializer(personal_info)
            return Response(serializer.data)
        except Exception as e:
            return Response(
                {'error': str(e)}, 
                status=status.HTTP_500_INTERNAL_SERVER_ERROR
            )
    
    def put(self, request):
        """
        Update the single PersonalInfo object. Create if none exists.
        """
        try:
            personal_info = PersonalInfo.objects.first()
            
            if personal_info:
                # Update existing object
                serializer = PersonalInfoSerializer(personal_info, data=request.data, partial=True)
            else:
                # Create new object if none exists
                serializer = PersonalInfoSerializer(data=request.data)
            
            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data, status=status.HTTP_200_OK if personal_info else status.HTTP_201_CREATED)
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        except Exception as e:
            return Response(
                {'error': str(e)}, 
                status=status.HTTP_500_INTERNAL_SERVER_ERROR
            )
    
    def patch(self, request):
        """
        Partially update the single PersonalInfo object. Create if none exists.
        """
        return self.put(request)  # Use the same logic as PUT


class SkillViewSet(viewsets.ModelViewSet):
    queryset = Skill.objects.all()
    serializer_class = SkillSerializer


class ProjectViewSet(viewsets.ModelViewSet):
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer
    
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
