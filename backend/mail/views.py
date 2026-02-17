from rest_framework.views import APIView
from mail.serializers import MailSerializer
from django.conf import settings
from django.core.mail import EmailMessage
from rest_framework.response import Response
from rest_framework import status
from django.utils.decorators import method_decorator
from django_ratelimit.decorators import ratelimit

@method_decorator(ratelimit(key="ip", rate="5/m", block=True), name="post")
class MailView(APIView):
    def post(self, request):
        serializer = MailSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)

        name = serializer.validated_data["name"] # type: ignore
        email = serializer.validated_data["email"] # type: ignore
        message = serializer.validated_data["message"] # type: ignore
        

        email_message = EmailMessage(
            subject=f"NOVA MENSAGEM DE: {name} - {email}",
            body=f"MENSAGEM:\n{message}",
            from_email=settings.DEFAULT_FROM_EMAIL,
            to=[settings.EMAIL_TO],
            reply_to=[email]
        )

        email_message.send()

        return Response({"detail": "Email enviado com sucesso!"}, status=status.HTTP_200_OK)
