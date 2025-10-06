# 🚀 Deploy Django Portfolio with SQLite

## Why SQLite is Perfect for Portfolio Projects:

- ✅ **Zero Configuration** - No database setup needed
- ✅ **File-based** - Database stored as a file
- ✅ **No External Dependencies** - Works everywhere
- ✅ **Perfect for Portfolios** - Simple and reliable
- ✅ **Free Forever** - No database costs
- ✅ **Easy Backup** - Just copy the database file

## 🎯 Best Hosting Options for SQLite Django

### **1. Railway (Recommended) ⭐**

- **Free Tier**: $5 credit monthly
- **SQLite Support**: Native file system
- **Easy Deploy**: One-click from GitHub
- **Custom Domains**: Free subdomain

### **2. Render**

- **Free Tier**: 750 hours/month
- **SQLite Support**: File-based storage
- **Auto-deploy**: From GitHub
- **SSL**: Automatic HTTPS

### **3. Heroku**

- **Paid Plans**: $5-7/month
- **SQLite Support**: File system storage
- **Mature Platform**: Reliable hosting
- **Git Integration**: Deploy with git push

### **4. PythonAnywhere**

- **Free Tier**: Limited but functional
- **SQLite Support**: Native Python hosting
- **Web Interface**: Easy management
- **Perfect for Learning**: Great for portfolios

## 🚀 Railway Deployment (Recommended)

### **Step 1: Go to Railway**

1. Visit [railway.app](https://railway.app)
2. Sign up with GitHub
3. Click **"New Project"**

### **Step 2: Deploy from GitHub**

1. **Select Repository**: Choose your `portfolio` repository
2. **Root Directory**: Set to `backend`
3. **Deploy**: Railway auto-detects Django

### **Step 3: Set Environment Variables**

In Railway dashboard, add these variables:

| Variable                 | Value                                                                |
| ------------------------ | -------------------------------------------------------------------- |
| `SECRET_KEY`             | `django-insecure-nhnsrf07bxr#*9+((bqoj)0te=ge%1b2n(z*g=ro+%2#j-4x29` |
| `API_KEY`                | `hACnfBBfBkWdmNOw4Eg7RK-9qHtcPydl1AeZJGPUS-g`                        |
| `DEBUG`                  | `False`                                                              |
| `DJANGO_SETTINGS_MODULE` | `backend.settings`                                                   |

### **Step 4: Run Migrations**

1. **Go to Deployments Tab**
2. **Click on your deployment**
3. **Open Console**
4. **Run**: `python manage.py migrate`

### **Step 5: Test Your API**

Your API will be available at: `https://your-project.railway.app`

## 🔧 SQLite Configuration

### **Files Ready for Deployment:**

- ✅ `requirements.txt` - Python dependencies (no PostgreSQL needed)
- ✅ `backend/settings.py` - SQLite configuration
- ✅ `api/authentication.py` - API key authentication
- ✅ `Procfile` - Heroku process configuration

### **SQLite Advantages:**

- ✅ **Zero Setup** - No database configuration
- ✅ **File-based** - Database stored as `db.sqlite3`
- ✅ **Portable** - Easy to backup and move
- ✅ **Fast** - Excellent performance for small projects
- ✅ **Reliable** - Battle-tested database engine

## 💰 Cost Comparison

| Platform           | Free Tier       | SQLite Support | Best For       |
| ------------------ | --------------- | -------------- | -------------- |
| **Railway**        | $5 credit/month | ✅ Native      | Portfolios     |
| **Render**         | 750 hours/month | ✅ File system | Small projects |
| **Heroku**         | $5-7/month      | ✅ File system | Production     |
| **PythonAnywhere** | Limited free    | ✅ Native      | Learning       |

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
- ✅ File-based Database Security

## 📝 SQLite Benefits for Portfolio

### **Perfect for Portfolio Projects:**

- **Simple Setup** - No database configuration needed
- **Cost Effective** - No database hosting costs
- **Easy Backup** - Just copy the database file
- **Portable** - Works on any platform
- **Fast** - Excellent performance for small datasets
- **Reliable** - Used by millions of applications

### **When to Consider PostgreSQL:**

- **High Traffic** - Thousands of requests per day
- **Complex Queries** - Advanced database operations
- **Multiple Users** - Concurrent access requirements
- **Large Datasets** - Millions of records

For a portfolio project, SQLite is the perfect choice! 🎉
