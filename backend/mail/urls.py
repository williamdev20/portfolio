from django.urls import path
from mail.views import MailView

urlpatterns = [
    path("", MailView.as_view(), name="send_email")
]
