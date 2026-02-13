from django.contrib import admin
from certifications.models import Certification

@admin.register(Certification)
class CertificationAdmin(admin.ModelAdmin):
    list_display = ("title",)
    readonly_fields = ("created_at", "updated_at")

    fieldsets = (
        ("Details", {
            "fields": ("title", "period")
        }),
        ("Media", {
            "fields": ("image",)
        }),
        ("Links", {
            "fields": ("credential_link",)
        }),
        ("Ordering", {
            "fields": ("priority", "created_at")
        }),
        ("Metadata", {
            "fields": ("updated_at",)
         })
    )