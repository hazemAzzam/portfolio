import os
import re

def delete_files(base_dir):
    # Regular expression to match filenames that start with four digits
    digit_pattern = re.compile(r'^\d{4}')

    # Delete sqllite3
    db_path = os.path.join(base_dir, 'db.sqlite3')
    if os.path.exists(db_path):
        os.remove(db_path)
    else:
        print(f"db.sqlite3 not found in {base_dir}")

    for root, dirs, files in os.walk(base_dir):
        # Delete Python cache files
        for file in files:
            if file.endswith('.pyc') or file == '__pycache__':
                file_path = os.path.join(root, file)
                try:
                    os.remove(file_path)
                except Exception as e:
                    print(f"Error deleting {file_path}: {e}")

        # Delete files starting with four digits
        for file in files:
            if digit_pattern.match(file):
                file_path = os.path.join(root, file)
                try:
                    os.remove(file_path)
                except Exception as e:
                    print(f"Error deleting {file_path}: {e}")

# Start deleting from the current directory
delete_files(os.getcwd())
