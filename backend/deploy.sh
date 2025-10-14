#!/bin/bash

# Production Deployment Script for Vercel

echo "🚀 Starting production deployment..."

# Install production dependencies
echo "📦 Installing production dependencies..."
pip install -r requirements.production.txt

# Run database migrations
echo "🗄️ Running database migrations..."
python manage.py migrate

# Collect static files
echo "📁 Collecting static files..."
python manage.py collectstatic --noinput

# Create superuser (if needed)
echo "👤 Creating superuser..."
python manage.py shell -c "
from django.contrib.auth.models import User
if not User.objects.filter(username='admin').exists():
    User.objects.create_superuser('admin', 'admin@example.com', 'admin123')
    print('Superuser created')
else:
    print('Superuser already exists')
"

echo "✅ Production deployment completed!"
echo "🌐 Your backend is ready for production on Vercel"
