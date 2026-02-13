from django.db import models
from django.utils import timezone

class Certification(models.Model):
    image = models.FileField(upload_to="certifications/") # SVG files
    title = models.CharField(max_length=200, null=False, blank=False)
    period = models.CharField(max_length=200, null=False, blank=False)
    credential_link = models.URLField(null=False, blank=False)
    priority = models.PositiveIntegerField(null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True, db_index=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        verbose_name = "Certification"
        verbose_name_plural = "Certifications"

    def __str__(self) -> str:
        return f"{self.title}"
