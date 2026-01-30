from rest_framework import viewsets, status
from rest_framework.decorators import api_view, permission_classes
from rest_framework.decorators import action
from rest_framework.response import Response
from rest_framework.views import APIView
from .models import Experience, PersonalInfo, Skill, Project, Message
from .serializers import (
    ExperienceSerializer,
    PersonalInfoSerializer, 
    SkillSerializer, 
    ProjectSerializer,
    MessageSerializer
)
from rest_framework.permissions import AllowAny, IsAuthenticated, IsAdminUser, BasePermission
from rest_framework_simplejwt.tokens import AccessToken
from django.contrib.auth import authenticate


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

class SuperuserOnly(BasePermission):
    """
    Allows access only to superusers.
    """
    message = "You must be a superuser to access this resource."

    def has_permission(self, request, view):
        return bool(request.user and request.user.is_authenticated and request.user.is_superuser)


class MessageViewSet(viewsets.ModelViewSet):
    queryset = Message.objects.all()
    serializer_class = MessageSerializer
    
    def get_permissions(self):
        if self.action == 'create':
            return [AllowAny()]
        return [SuperuserOnly()]

class ExperienceViewSet(viewsets.ModelViewSet):
    queryset = Experience.objects.all()
    serializer_class = ExperienceSerializer


class ProjectViewSet(viewsets.ModelViewSet):
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer
    filterset_fields = ['showInPortfolio']
    
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

@api_view(['POST'])
@permission_classes([AllowAny])
def login_view(request):
    username = request.data.get('username')
    password = request.data.get('password')
    user = authenticate(username=username, password=password)
    if user is not None:
        token = AccessToken.for_user(user)
        response = Response({
            'success': True,
            'is_superuser': user.is_superuser,
            'username': user.username,
        })
        # Production vs Development cookie settings
        from django.conf import settings
        
        cookie_settings = {
            'key': 'authToken',
            'value': str(token),
            'httponly': True,
            'max_age': 60 * 60 * 24,
            'path': '/',
        }
        
        if settings.DEBUG:
            # Development settings
            cookie_settings.update({
                'secure': False,
                'samesite': 'Lax',
                'domain': None,
            })
        else:
            # Production settings
            cookie_settings.update({
                'secure': True,
                'samesite': 'None',  # Required for cross-origin on Vercel
                'domain': None,  # Don't set domain for cross-origin cookies
            })
        
        response.set_cookie(**cookie_settings)

        print("cookies", response.cookies)
        return response
    else:
        return Response({'error': 'Invalid credentials'}, status=status.HTTP_401_UNAUTHORIZED)

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def is_authenticated_view(request):
    return Response({
        'is_authenticated': request.user.is_authenticated,
        'username': request.user.username,
        'is_superuser': request.user.is_superuser,
        'is_staff': request.user.is_staff,
    })