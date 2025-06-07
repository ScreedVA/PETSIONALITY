# Source code by Christian

FROM python:3.10-slim

# Install system dependencies, including libpq-dev which provides pg_config
RUN apt-get update && apt-get install -y \
    libpq-dev \
    gcc \
    && rm -rf /var/lib/apt/lists/*

WORKDIR /backend

# COPY ./backend/requirements.txt .

# Copy the application files
COPY . .


# COPY requirements.txt .

# Install the required dependencies with verbose output
RUN pip install --no-cache-dir -v -r requirements.txt

COPY . .

EXPOSE 8000

CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000"]



