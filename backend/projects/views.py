from rest_framework.generics import ListAPIView
from projects.serializers import ProjectSerializer
from projects.models import Project

class ProjectListView(ListAPIView):
    serializer_class = ProjectSerializer
    queryset = Project.objects.all()
