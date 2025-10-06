# 🚀 Deploy Django Portfolio via Vercel Website

## Step-by-Step Guide for Web Deployment

### **Step 1: Go to Vercel Dashboard**

1. Visit [vercel.com](https://vercel.com)
2. Sign up/Login with GitHub
3. Click **"New Project"**

### **Step 2: Import Your Repository**

1. **Connect GitHub**: Authorize Vercel to access your repositories
2. **Select Repository**: Choose your `portfolio` repository
3. **Import Project**: Click "Import" on your portfolio repository

### **Step 3: Configure Project Settings**

1. **Framework Preset**: Select **"Other"** (since Django isn't auto-detected)
2. **Root Directory**: Set to `backend` (your Django project folder)
3. **Build Command**: Leave empty (Vercel will auto-detect)
4. **Output Directory**: Leave empty
5. **Install Command**: `pip install -r requirements.txt`

### **Step 4: Add Environment Variables**

Click **"Environment Variables"** and add:

| Variable                 | Value                                                                |
| ------------------------ | -------------------------------------------------------------------- |
| `SECRET_KEY`             | `django-insecure-nhnsrf07bxr#*9+((bqoj)0te=ge%1b2n(z*g=ro+%2#j-4x29` |
| `API_KEY`                | `hACnfBBfBkWdmNOw4Eg7RK-9qHtcPydl1AeZJGPUS-g`                        |
| `DEBUG`                  | `False`                                                              |
| `DJANGO_SETTINGS_MODULE` | `backend.settings`                                                   |

### **Step 5: Add Vercel Postgres Database**

1. **Go to Storage Tab**: In your project dashboard
2. **Click "Create Database"**: Select **"Postgres"**
3. **Database Name**: `portfolio-db` (or any name you prefer)
4. **Region**: Choose closest to your users
5. **Click "Create"**: Vercel will automatically add `DATABASE_URL`

### **Step 6: Deploy Your Project**

1. **Click "Deploy"**: Vercel will start building your project
2. **Wait for Build**: This may take 2-3 minutes
3. **Check Build Logs**: Ensure no errors during deployment

### **Step 7: Run Database Migrations**

After successful deployment:

1. **Go to Functions Tab**: In your project dashboard
2. **Create New Function**:
   - **Name**: `migrate`
   - **Runtime**: Python
   - **Code**: Copy the content from `migrate.py`
3. **Deploy Function**: This will run your migrations

### **Step 8: Test Your API**

Your API will be available at: `https://your-project-name.vercel.app`

Test with:

```bash
curl -X GET "https://your-project-name.vercel.app/api/personal-info/" \
  -H "X-API-Key: hACnfBBfBkWdmNOw4Eg7RK-9qHtcPydl1AeZJGPUS-g" \
  -H "Content-Type: application/json"
```

## 🔧 Project Configuration Summary

### **Files Ready for Deployment:**

- ✅ `vercel.json` - Vercel configuration
- ✅ `requirements.txt` - Python dependencies
- ✅ `migrate.py` - Database migration script
- ✅ `api/index.py` - WSGI entry point
- ✅ `backend/settings.py` - Production settings
- ✅ `api/authentication.py` - API key authentication

### **Environment Variables Set:**

- ✅ `SECRET_KEY` - Django security
- ✅ `API_KEY` - API authentication
- ✅ `DEBUG=False` - Production mode
- ✅ `DATABASE_URL` - Auto-added by Vercel Postgres

### **Database Features:**

- ✅ **Vercel Postgres**: Managed PostgreSQL database
- ✅ **Free Tier**: 500MB storage, 10GB bandwidth
- ✅ **Automatic Backups**: Included
- ✅ **SSL Encryption**: All connections secured

## 🎯 Your API Endpoints

Once deployed, your API will be available at:

- `GET/PUT https://your-project.vercel.app/api/personal-info/`
- `GET/POST/PUT/DELETE https://your-project.vercel.app/api/skills/`
- `GET/POST/PUT/DELETE https://your-project.vercel.app/api/projects/`
- `POST https://your-project.vercel.app/api/projects/{id}/toggle-featured/`

All endpoints require the `X-API-Key` header with your API key.

## 🔒 Security Features

- ✅ API Key Authentication
- ✅ CORS Configuration
- ✅ Environment Variables
- ✅ SSL/HTTPS Encryption
- ✅ Database Security

Your Django portfolio backend is ready for Vercel deployment! 🎉
