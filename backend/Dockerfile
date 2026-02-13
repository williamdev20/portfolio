FROM python:3.14-bookworm

WORKDIR /core

RUN apt-get update && \
    apt-get install -y curl
RUN curl -LsSf https://astral.sh/uv/install.sh | sh

# O python bookworm não inclui a pasta /root/.local/bin/, que é necessária para instalar o UV
ENV PATH="/root/.local/bin/:$PATH"

COPY pyproject.toml uv.lock ./
RUN uv sync

COPY . .

COPY entrypoint.sh ./
RUN chmod +x entrypoint.sh

EXPOSE 8000

CMD ["bash", "entrypoint.sh"]