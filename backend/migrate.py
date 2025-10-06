#!/usr/bin/env python
"""
Migration script for Vercel deployment.
This script runs Django migrations on Vercel.
"""
import os
import sys
import django
from django.core.management import execute_from_command_line

if __name__ == "__main__":
    os.environ.setdefault("DJANGO_SETTINGS_MODULE", "backend.settings")
    django.setup()
    
    # Run migrations
    execute_from_command_line(['manage.py', 'migrate'])
    
    print("Migrations completed successfully!")
