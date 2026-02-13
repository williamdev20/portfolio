#!/bin/bash
set -e

uv run python3 manage.py migrate

uv run python3 manage.py runserver 0.0.0.0:8000