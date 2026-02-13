from rest_framework.generics import ListAPIView
from certifications.serializers import CertificationSerializer
from certifications.models import Certification

class CertificationListView(ListAPIView):
    serializer_class = CertificationSerializer
    queryset = Certification.objects.all()
