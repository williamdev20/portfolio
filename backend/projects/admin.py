from django.contrib import admin
from projects.models import Project

@admin.register(Project)
class ProjectAdmin(admin.ModelAdmin):
    list_display = ("title", "stack", "priority")
    readonly_fields = ("created_at", "updated_at")

    fieldsets = (
        ("Details", {
            "fields": ("title", "stack", "description")
        }),
        ("Media", {
            "fields": ("image",)
        }),
        ("Links", {
            "fields": ("github", "site")
        }),
        ("Ordering", {
            "fields": ("priority",)
        }),
        ("Metadata", {
            "fields": ("created_at", "updated_at")
        })
    )
