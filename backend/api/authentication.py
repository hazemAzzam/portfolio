from rest_framework.authentication import BaseAuthentication
from rest_framework.exceptions import AuthenticationFailed
from django.conf import settings
import os


class APIKeyAuthentication(BaseAuthentication):
    """
    Custom API Key authentication for Vercel deployment.
    """
    
    def authenticate(self, request):
        api_key = request.META.get('HTTP_X_API_KEY')

        print("api_key", api_key)
                   
        # Get the expected API key from environment variables
        expected_api_key = os.getenv('API_KEY')
        
        if not expected_api_key:
            raise AuthenticationFailed('API key not configured')
            
        if api_key != expected_api_key:
            raise AuthenticationFailed('Invalid API key')
            
        # Return a tuple of (user, auth) - we don't need a user for API key auth
        return (None, api_key)
    
    def authenticate_header(self, request):
        return 'X-API-Key'
