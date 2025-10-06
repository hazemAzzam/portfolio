# Vercel Postgres Deployment Guide

## 🚀 Deploy Your Django Portfolio to Vercel with Postgres

### **Step 1: Deploy to Vercel**

```bash
# Login to Vercel
vercel login

# Deploy your project
vercel

# Follow the prompts to link your project
```

### **Step 2: Add Vercel Postgres**

```bash
# Add Postgres addon to your project
vercel addons create postgres

# This will automatically add DATABASE_URL to your environment variables
```

### **Step 3: Run Migrations**

```bash
# Pull environment variables
vercel env pull .env.production

# Run migrations
python manage.py migrate

# Or use the migration script
python migrate.py
```

### **Step 4: Set Environment Variables**

```bash
# Set your API key
vercel env add API_KEY
# Enter: hACnfBBfBkWdmNOw4Eg7RK-9qHtcPydl1AeZJGPUS-g

# Set secret key
vercel env add SECRET_KEY
# Enter: django-insecure-nhnsrf07bxr#*9+((bqoj)0te=ge%1b2n(z*g=ro+%2#j-4x29

# Set debug mode
vercel env add DEBUG
# Enter: False
```

### **Step 5: Test Your API**

```bash
# Test your deployed API
curl -X GET "https://your-project.vercel.app/api/personal-info/" \
  -H "X-API-Key: hACnfBBfBkWdmNOw4Eg7RK-9qHtcPydl1AeZJGPUS-g" \
  -H "Content-Type: application/json"
```

## 🔧 Local Development

```bash
# Install dependencies
pip install -r requirements.txt

# Run migrations locally
python manage.py migrate

# Start development server
python manage.py runserver
```

## 📊 Database Management

- **Vercel Dashboard**: View your Postgres database
- **Free Tier**: 500MB storage, 10GB bandwidth
- **Automatic Backups**: Included with Vercel Postgres
- **Connection Pooling**: Automatic connection management

## 🔒 Security

- All database connections are encrypted
- Environment variables are secure
- API key authentication enabled
- CORS properly configured
