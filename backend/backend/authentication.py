from rest_framework_simplejwt.authentication import JWTAuthentication

class CookieJWTAuthentication(JWTAuthentication):
    def authenticate(self, request):
       
        # First, try normal header auth
        header_auth = super().authenticate(request)
        if header_auth is not None:
            return header_auth

        # Then try from cookies
        raw_token = request.COOKIES.get('authToken')
        
        if raw_token is None:
            return None

        try:
            validated_token = self.get_validated_token(raw_token)
            user = self.get_user(validated_token)
            return user, validated_token
        except Exception as e:
            return None
