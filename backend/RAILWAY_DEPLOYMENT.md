# 🚀 Deploy Django Portfolio to Railway

## Why Railway is Better for Django:

- ✅ **Native Django Support**: Built for Python/Django
- ✅ **PostgreSQL Included**: Free database
- ✅ **Environment Variables**: Easy configuration
- ✅ **Auto-deploy**: From GitHub
- ✅ **Custom Domains**: Free subdomain
- ✅ **Better Performance**: Optimized for Python

## Step-by-Step Railway Deployment

### **Step 1: Go to Railway**

1. Visit [railway.app](https://railway.app)
2. Sign up with GitHub
3. Click **"New Project"**

### **Step 2: Deploy from GitHub**

1. **Select Repository**: Choose your `portfolio` repository
2. **Root Directory**: Set to `backend`
3. **Deploy**: Railway will auto-detect Django

### **Step 3: Add PostgreSQL Database**

1. **Go to Project Dashboard**
2. **Click "New"** → **"Database"** → **"PostgreSQL"**
3. **Database Created**: Railway adds `DATABASE_URL` automatically

### **Step 4: Set Environment Variables**

In Railway dashboard, add these variables:

| Variable                 | Value                                                                |
| ------------------------ | -------------------------------------------------------------------- |
| `SECRET_KEY`             | `django-insecure-nhnsrf07bxr#*9+((bqoj)0te=ge%1b2n(z*g=ro+%2#j-4x29` |
| `API_KEY`                | `hACnfBBfBkWdmNOw4Eg7RK-9qHtcPydl1AeZJGPUS-g`                        |
| `DEBUG`                  | `False`                                                              |
| `DJANGO_SETTINGS_MODULE` | `backend.settings`                                                   |

### **Step 5: Run Migrations**

1. **Go to Deployments Tab**
2. **Click on your deployment**
3. **Open Console**
4. **Run**: `python manage.py migrate`

### **Step 6: Test Your API**

Your API will be available at: `https://your-project.railway.app`

Test with:

```bash
curl -X GET "https://your-project.railway.app/api/personal-info/" \
  -H "X-API-Key: hACnfBBfBkWdmNOw4Eg7RK-9qHtcPydl1AeZJGPUS-g" \
  -H "Content-Type: application/json"
```

## 🔧 Railway Configuration

### **Files Ready for Railway:**

- ✅ `requirements.txt` - Python dependencies
- ✅ `backend/settings.py` - Production settings
- ✅ `api/authentication.py` - API key authentication
- ✅ `migrate.py` - Database migration script

### **Railway Auto-detects:**

- ✅ Django project structure
- ✅ Python runtime
- ✅ Dependencies from requirements.txt
- ✅ Database connection from DATABASE_URL

## 💰 Railway Pricing

### **Free Tier:**

- **$5 credit monthly** (usually enough for small projects)
- **PostgreSQL database** included
- **Custom domains** free
- **Auto-deploy** from GitHub

### **Paid Plans:**

- **Hobby**: $5/month (if you exceed free credits)
- **Pro**: $20/month (for production apps)

## 🎯 Your API Endpoints

Once deployed:

- `GET/PUT https://your-project.railway.app/api/personal-info/`
- `GET/POST/PUT/DELETE https://your-project.railway.app/api/skills/`
- `GET/POST/PUT/DELETE https://your-project.railway.app/api/projects/`
- `POST https://your-project.railway.app/api/projects/{id}/toggle-featured/`

## 🔒 Security Features

- ✅ API Key Authentication
- ✅ CORS Configuration
- ✅ Environment Variables
- ✅ SSL/HTTPS Encryption
- ✅ Database Security

Railway is the best choice for Django backends! 🎉
