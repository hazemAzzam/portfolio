from rest_framework_simplejwt.authentication import JWTAuthentication

class CookieJWTAuthentication(JWTAuthentication):
    def authenticate(self, request):
        print(f"🔍 [AUTH DEBUG] Request cookies: {request.COOKIES}")
        print(f"🔍 [AUTH DEBUG] Request headers: {dict(request.headers)}")
        
        # First, try normal header auth
        header_auth = super().authenticate(request)
        if header_auth is not None:
            print("✅ [AUTH DEBUG] Header authentication successful")
            return header_auth

        # Then try from cookies
        raw_token = request.COOKIES.get('authToken')
        print(f"🔍 [AUTH DEBUG] Raw token from cookies: {raw_token}")
        
        if raw_token is None:
            print("❌ [AUTH DEBUG] No authToken cookie found")
            return None

        try:
            validated_token = self.get_validated_token(raw_token)
            user = self.get_user(validated_token)
            print(f"✅ [AUTH DEBUG] Cookie authentication successful for user: {user.username}")
            return user, validated_token
        except Exception as e:
            print(f"❌ [AUTH DEBUG] Token validation failed: {e}")
            return None
