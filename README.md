<!-- Source File by Christian -->

# **PETSIONALITY WEB APP**

### [Click Here to Open Project Directly](https://petsionality-prelaunch.onrender.com)

## **Table of Contents**

1. [Run as Docker Container](#run-as-docker-container)

   - [Prerequisites](#prerequisites)

2. [Run as Local Project](#projet-structure)

   - [Prerequisites](#prerequisites)
   - [Frontend Installation](#frontend-installation)
   - [Running the Frontend Application](#running-the-frontend-application)
   - [Backend Installation](#backend-installation)
   - [Running the Backend Application](#running-the-backend-application)

---

## **Run as Docker Container**

### **Prerequisites**

Make sure you have the following installed:

- [Docker Desktop and CLI](https://www.docker.com/get-started/)

### **Docker Image Installation**

1. Clone the repository:

```bash

git clone https://github.com/ScreedVA/PETSIONALITY.git

```

- Make sure you having Docker Desktop Open

- Make sure you are in the right root directory (See Directory structure below)

```bash

cd PETSIONALITY

```

- To install image, run the following command

```bash

docker-compose up --build

```

## **Run as Local Project**

### **Prerequisites**

Make sure you have the following installed:

- Please go into sessions.py and uncomment the correct SQL_DATABASE_URL variable definition

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
- [pip](https://pip.pypa.io/en/stable/installation/)

1. Clone the repository:

```bash

git clone https://github.com/ScreedVA/PETSIONALITY.git

```

### **Frontend Installation**

1. Navigate to the frontend directory:

```bash

cd frontend

```

2. Install dependencies

```bash

npm install

```

### **Running the Frontend Application**

To start the development server, run:

```bash

npm run dev

```

For a production build:

```bash

npm run build

```

### **Backend Installation**

1. Navigate to the backend directory:

```bash

cd backend

```

2. Install dependencies

```bash

pip install -r requirements.txt

```

### **Running the Backend Application**

To start the development server, run:

```bash

uvicorn main:app --reload

```

## **Projet Structure**

```plaintext

├── PETSIONALITY/
│   ├── backend/
│   ├── frontend/
│   ├── docker-compose.yml

```
