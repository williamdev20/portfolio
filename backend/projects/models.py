from django.db import models
from django.contrib.postgres.fields import ArrayField

class Project(models.Model):
    class Priority(models.IntegerChoices):
        ONE = 1, "1"
        TWO = 2, "2"
        THREE = 3, "3"
        FOUR = 4, "4"
        FIVE = 5, "5"
        SIX = 6, "6"
        SEVEN = 7, "7"
        EIGHT = 8, "8"

    image = models.ImageField(upload_to="projects/", null=False, blank=False) # PNG or WebP files
    title = models.CharField(max_length=200, null=False, blank=False)
    stack = ArrayField(models.CharField(max_length=50, null=False, blank=False))
    description = models.TextField(null=False, blank=False)
    github = models.URLField(null=False, blank=False)
    site = models.URLField(null=False, blank=False)
    priority = models.IntegerField(choices=Priority.choices, unique=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        verbose_name = "Project"
        verbose_name_plural = "Projects"

    def clean(self):
        if isinstance(self.stack, str):
            self.stack = [item.strip() for item in self.stack.split(",") if item.strip()]

    def save(self, *args, **kwargs):
        self.clean()
        super().save(*args, **kwargs)

    def __str__(self) -> str:
        return f"{self.title}"
