from django.core.management.base import BaseCommand
from django.contrib.auth import get_user_model
import os

class Command(BaseCommand):
    help = "Create superuser if not exists"

    def handle(self, *args, **kwargs):
        User = get_user_model()
        if not User.objects.filter(username=os.getenv("ADMIN_USERNAME")).exists():
            User.objects.create_superuser(
                username=os.getenv("ADMIN_USERNAME", ""),
                email=os.getenv("ADMIN_EMAIL", ""),
                password=os.getenv("ADMIN_PASSWORD", "")
            )
            self.stdout.write(self.style.SUCCESS("Superuser created"))
        else:
            self.stdout.write("Superuser already exists")
