# 🚀 Deploy Django Portfolio to Heroku

## Why Heroku is Great for Django:

- ✅ **Mature Platform**: Years of Django hosting experience
- ✅ **PostgreSQL Add-on**: Easy database setup
- ✅ **Environment Variables**: Simple configuration
- ✅ **Git Integration**: Deploy with `git push`
- ✅ **Add-ons Ecosystem**: Many useful services
- ✅ **Great Documentation**: Extensive Django guides

## Step-by-Step Heroku Deployment

### **Step 1: Install Heroku CLI**

#### **Windows:**

```bash
# Download from https://devcenter.heroku.com/articles/heroku-cli
# Or use winget
winget install Heroku.HerokuCLI
```

#### **Alternative - Use Heroku Website:**

You can also deploy directly from the Heroku website without CLI.

### **Step 2: Create Heroku App**

#### **Option A: Using CLI**

```bash
# Login to Heroku
heroku login

# Create new app
heroku create your-portfolio-backend

# Or let Heroku generate name
heroku create
```

#### **Option B: Using Website**

1. Go to [heroku.com](https://heroku.com)
2. Sign up/Login
3. Click **"New"** → **"Create new app"**
4. **App name**: `your-portfolio-backend`
5. **Region**: Choose closest to your users
6. **Click "Create app"**

### **Step 3: SQLite Database (No Setup Needed!)**

✅ **SQLite is included by default** - No database setup required!

- **File-based database** - Stored in your app's file system
- **No external dependencies** - Works out of the box
- **Perfect for portfolios** - Simple and reliable

### **Step 4: Set Environment Variables**

#### **Using CLI:**

```bash
# Set environment variables
heroku config:set SECRET_KEY="django-insecure-nhnsrf07bxr#*9+((bqoj)0te=ge%1b2n(z*g=ro+%2#j-4x29"
heroku config:set API_KEY="hACnfBBfBkWdmNOw4Eg7RK-9qHtcPydl1AeZJGPUS-g"
heroku config:set DEBUG="False"
heroku config:set DJANGO_SETTINGS_MODULE="backend.settings"
```

#### **Using Website:**

1. **Go to your app dashboard**
2. **Settings tab** → **Config Vars**
3. **Add these variables:**

| Variable                 | Value                                                                |
| ------------------------ | -------------------------------------------------------------------- |
| `SECRET_KEY`             | `django-insecure-nhnsrf07bxr#*9+((bqoj)0te=ge%1b2n(z*g=ro+%2#j-4x29` |
| `API_KEY`                | `hACnfBBfBkWdmNOw4Eg7RK-9qHtcPydl1AeZJGPUS-g`                        |
| `DEBUG`                  | `False`                                                              |
| `DJANGO_SETTINGS_MODULE` | `backend.settings`                                                   |

### **Step 5: Create Heroku-Specific Files**

#### **Create Procfile:**

```bash
# Create Procfile in backend directory
echo "web: gunicorn backend.wsgi --log-file -" > Procfile
```

#### **Update requirements.txt:**

```bash
# Add gunicorn for production
echo "gunicorn==21.2.0" >> requirements.txt
```

### **Step 6: Deploy to Heroku**

#### **Using CLI:**

```bash
# Initialize git if not already done
git init

# Add Heroku remote
heroku git:remote -a your-portfolio-backend

# Deploy
git add .
git commit -m "Deploy Django portfolio to Heroku"
git push heroku main
```

#### **Using Website:**

1. **Connect GitHub** in your app dashboard
2. **Enable automatic deploys**
3. **Manual deploy** from main branch

### **Step 7: Run Database Migrations**

#### **Using CLI:**

```bash
# Run migrations
heroku run python manage.py migrate

# Create superuser (optional)
heroku run python manage.py createsuperuser
```

#### **Using Website:**

1. **Go to More** → **Run console**
2. **Run**: `python manage.py migrate`

### **Step 8: Test Your API**

Your API will be available at: `https://your-portfolio-backend.herokuapp.com`

Test with:

```bash
curl -X GET "https://your-portfolio-backend.herokuapp.com/api/personal-info/" \
  -H "X-API-Key: hACnfBBfBkWdmNOw4Eg7RK-9qHtcPydl1AeZJGPUS-g" \
  -H "Content-Type: application/json"
```

## 🔧 Heroku Configuration

### **Files Ready for Heroku:**

- ✅ `requirements.txt` - Python dependencies
- ✅ `Procfile` - Process configuration
- ✅ `backend/settings.py` - Production settings
- ✅ `api/authentication.py` - API key authentication

### **Heroku Auto-detects:**

- ✅ Django project structure
- ✅ Python runtime from requirements.txt
- ✅ Database connection from DATABASE_URL
- ✅ Static files handling

## 💰 Heroku Pricing

### **Free Tier (Discontinued):**

- **No longer available** for new apps
- **Existing free apps** continue to work

### **Paid Plans:**

- **Eco**: $5/month (dyno hours)
- **Basic**: $7/month (always-on dyno)
- **Standard**: $25/month (production features)

### **Database:**

- **SQLite**: Free (included with Heroku)
- **File-based**: Stored in app's file system
- **No limits**: Perfect for portfolio projects

## 🎯 Your API Endpoints

Once deployed:

- `GET/PUT https://your-portfolio-backend.herokuapp.com/api/personal-info/`
- `GET/POST/PUT/DELETE https://your-portfolio-backend.herokuapp.com/api/skills/`
- `GET/POST/PUT/DELETE https://your-portfolio-backend.herokuapp.com/api/projects/`
- `POST https://your-portfolio-backend.herokuapp.com/api/projects/{id}/toggle-featured/`

## 🔒 Security Features

- ✅ API Key Authentication
- ✅ CORS Configuration
- ✅ Environment Variables
- ✅ SSL/HTTPS Encryption
- ✅ Database Security

## 📝 Additional Heroku Features

### **Useful Commands:**

```bash
# View logs
heroku logs --tail

# Open app in browser
heroku open

# Run Django shell
heroku run python manage.py shell

# Check app status
heroku ps
```

### **Add-ons You Might Need:**

- **Heroku Postgres**: Database
- **Heroku Redis**: Caching (if needed)
- **SendGrid**: Email service (if needed)

Heroku is a solid choice for Django backends! 🎉
