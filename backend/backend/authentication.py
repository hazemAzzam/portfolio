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

        validated_token = self.get_validated_token(raw_token)
        return self.get_user(validated_token), validated_token
