from rest_framework import serializers

class MailSerializer(serializers.Serializer):
    name = serializers.CharField(max_length=100, trim_whitespace=True)
    email = serializers.EmailField()
    message = serializers.CharField(max_length=2000, trim_whitespace=True)