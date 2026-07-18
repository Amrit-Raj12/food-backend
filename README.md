# 🍽️ South Indian Food Ordering Backend

A production-ready backend for a **South Indian Food Ordering System** built with **NestJS**, **PostgreSQL**, **Prisma**, **Redis**, and **Docker**.

This project is being developed using professional software engineering practices, including system design, clean architecture, testing, CI/CD, security, and scalability.

---

# 🚀 Tech Stack

## Backend

- NestJS
- TypeScript
- Prisma ORM
- PostgreSQL
- Redis
- Docker
- JWT Authentication
- Swagger
- Jest

---

# 📂 Project Structure

```text
food-backend/
│
├── prisma/
├── src/
│   ├── auth/
│   ├── users/
│   ├── products/
│   ├── categories/
│   ├── cart/
│   ├── orders/
│   ├── payments/
│   ├── common/
│   ├── config/
│   └── tests/
│
├── notes/
├── docker-compose.yml
├── .env.example
├── README.md
└── package.json
```

---

# ✨ Features

## Customer

- User Authentication
- Browse Categories
- Browse Products
- Search Products
- Cart Management
- Place Orders
- Static Paytm QR Payment
- Order History
- User Profile

---

## Admin

- Dashboard
- Category Management
- Product Management
- Order Management
- User Management
- Analytics (Future)

---

# 🏗️ Architecture

The project follows a modular architecture using NestJS.

```text
Client
   │
   ▼
REST API
   │
   ▼
NestJS Modules
   │
   ▼
Prisma ORM
   │
   ▼
PostgreSQL
```

Redis is used for caching, rate limiting, and future background jobs.

---

# 🛠️ Prerequisites

Install the following before running the project:

- Node.js 22 LTS
- pnpm
- Docker Desktop
- Git

---

# ⚙️ Installation

Clone the repository

```bash
git clone <repository-url>
```

Move into the project

```bash
cd food-backend
```

Install dependencies

```bash
pnpm install
```

Start Docker services

```bash
docker compose up -d
```

Run database migrations

```bash
pnpm prisma migrate dev
```

Start the development server

```bash
pnpm start:dev
```

---

# 🐳 Docker

Start containers

```bash
docker compose up -d
```

Stop containers

```bash
docker compose down
```

View running containers

```bash
docker ps
```

---

# 🗄️ Database

Database: PostgreSQL

ORM: Prisma

Future Tables

- Users
- Categories
- Products
- Orders
- OrderItems
- Payments

---

# 📚 API Documentation

Swagger documentation will be available at:

```
http://localhost:3000/api
```

---

# 🧪 Testing

Backend testing includes:

- Unit Tests
- Integration Tests
- API Tests

Run tests

```bash
pnpm test
```

---

# 📖 Documentation

Project documentation is available inside the `notes/` directory.

Topics include:

- Backend Foundation
- Docker
- PostgreSQL
- Prisma
- Redis
- Git Workflow
- Interview Notes

---

# 🌿 Git Workflow

Branches

```text
main
develop
feature/*
release/*
hotfix/*
```

Commit convention

```text
feat:
fix:
docs:
refactor:
test:
chore:
```

---

# 🚧 Current Progress

- [x] Project Planning
- [x] System Design
- [x] Backend Foundation
- [x] Docker Setup
- [x] PostgreSQL Setup
- [x] Redis Setup
- [x] Prisma Setup
- [x] Environment Configuration
- [x] Project Planning
- [x] Backend Foundation
- [x] Feature Modules Created
- [x] Controllers Generated
- [x] Services Generated
- [x] Common Folder Structure Created
- [x] Prisma Folder Created
- [x] Path Aliases Configured
- [x] Project Running Successfully
- [x] Global ValidationPipe Configured
- [x] DTO Validation Implemented
- [x] Request Transformation Enabled
- [x] Pagination DTO Created
- [x] Validation Test Endpoints Added
- [x] API Versioning Prefix (`/api/v1`) Configured
- [x] Validation Successfully Verified
- [x] Response Interceptor Created
- [x] Global Interceptor Registered
- [x] Exception Filter Created
- [x] Global Exception Filter Registered
- [x] Controller Responses Simplified
- [x] Success Response Standardized
- [x] Error Response Standardized
- [x] Validation Errors Tested
- [x] 404 Errors Tested
- [x] Swagger Installed
- [x] Swagger Configuration Completed
- [x] API Documentation Available at `/api/docs`
- [x] DTOs Documented with `@ApiProperty`
- [x] Controllers Annotated with Swagger Decorators
- [x] Swagger UI Tested Successfully
- [x] Helmet Configured
- [x] Compression Enabled
- [x] CORS Configured
- [x] Throttler Configured
- [x] Global Throttler Guard Registered
- [x] Rate Limiting Verified
- [x] 429 (Too Many Requests) Handling Verified
- [x] Exception Filter Handling 429 Responses
- [ ] Authentication
- [ ] Products
- [ ] Categories
- [ ] Cart
- [ ] Orders
- [ ] Payments
- [ ] Testing
- [ ] CI/CD
- [ ] Deployment

---

# 🎯 Goal

Build a scalable, secure, and production-ready backend that follows real-world software engineering practices while serving as a portfolio project and learning resource.

---

# 📄 License

This project is licensed under the MIT License.