from rest_framework.authentication import BaseAuthentication
from rest_framework.exceptions import AuthenticationFailed
from django.conf import settings
from decouple import config


class OriginAuthentication(BaseAuthentication):
    """
    Secure authentication based on request origin.
    Only allows requests from your frontend domains.
    """
    
    def authenticate(self, request):
        # Get the origin from the request
        origin = request.META.get('HTTP_ORIGIN')
        referer = request.META.get('HTTP_REFERER')
        
        if settings.DEBUG:
            # allowed_origins.extend(['http://localhost:3000', 'http://127.0.0.1:3000'])
            print("DEBUG MODE: Allowing all origins")
            return (None, origin)
        # Get allowed origins from environment variable
        allowed_origins = config('ALLOWED_ORIGINS', default='', cast=lambda v: [s.strip() for s in v.split(',') if s.strip()])
        
        # For development, allow localhost
        
        # Check if origin is allowed
        if origin and origin in allowed_origins:
            return (None, origin)
        
        # Check referer as fallback
        if referer:
            for allowed_origin in allowed_origins:
                if referer.startswith(allowed_origin):
                    return (None, referer)
        
        # If no valid origin/referer, deny access
        raise AuthenticationFailed('Access denied: Invalid origin')
    
    def authenticate_header(self, request):
        return 'Origin'
