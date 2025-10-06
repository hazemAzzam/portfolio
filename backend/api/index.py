from django.core.wsgi import get_wsgi_application
import os

# Set Django settings module
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'backend.settings')

# Get the WSGI application
app = get_wsgi_application()