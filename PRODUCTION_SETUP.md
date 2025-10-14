# Production Setup Guide

## Backend Deployment on Vercel

### 1. Environment Variables
Set these in your Vercel dashboard:

```bash
DEBUG=False
SECRET_KEY=your-super-secret-key-here
ALLOWED_HOSTS=dashboard-seven-jade.vercel.app,portfolio-three-fawn-30.vercel.app
```

### 2. Deploy Backend
```bash
cd backend
vercel --prod
```

### 3. Update Frontend API URL
In your Dashboard project, set the environment variable:
```bash
NEXT_PUBLIC_API_URL=https://your-backend-domain.vercel.app/api
```

## Frontend Deployment

### 1. Update API Configuration
The frontend will automatically use the production API URL when deployed to Vercel.

### 2. Deploy Frontend
```bash
cd Dashboard
vercel --prod
```

## Production Checklist

### Backend Security ✅
- [x] DEBUG=False in production
- [x] Secure cookie settings
- [x] CORS configured for Vercel domains
- [x] HTTPS redirect enabled
- [x] HSTS headers configured
- [x] XSS protection enabled

### Frontend Configuration ✅
- [x] API URL configured for production
- [x] Client-side authentication
- [x] Proper error handling
- [x] Loading states

### Domain Configuration
- Frontend: https://dashboard-seven-jade.vercel.app
- Portfolio: https://portfolio-three-fawn-30.vercel.app
- Backend: https://your-backend-domain.vercel.app

## Testing Production

1. **Login Test**: Use `username: guest`, `password: guest`
2. **Authentication**: Should work with HTTPS cookies
3. **CORS**: Should allow requests from Vercel domains
4. **Security**: All security headers should be present

## Troubleshooting

### Common Issues:
1. **CORS Errors**: Check CORS_ALLOWED_ORIGINS includes your Vercel domains
2. **Cookie Issues**: Ensure secure=True and samesite='None' for cross-origin
3. **HTTPS**: All requests must be HTTPS in production
4. **Domain Mismatch**: Check ALLOWED_HOSTS includes your backend domain

### Debug Commands:
```bash
# Check backend logs
vercel logs your-backend-domain

# Test API endpoint
curl https://your-backend-domain.vercel.app/api/is-authenticated/
```
