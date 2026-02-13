from django.urls import path
from certifications.views import CertificationListView

urlpatterns = [
    path("", CertificationListView.as_view(), name="certification_list")
]
