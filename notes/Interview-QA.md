# Interview-QA.md

# NestJS Backend Interview Notes

This document contains interview questions and answers based on the concepts implemented in the South Indian Food Backend project.

---

# Table of Contents

1. NestJS Basics
2. Dependency Injection
3. Modules
4. Configuration
5. Environment Variables
6. Docker
7. PostgreSQL
8. Prisma
9. Prisma Service
10. DTO & Validation
11. ValidationPipe
12. Exception Filters
13. Interceptors
14. Swagger / OpenAPI
15. Security
16. Helmet
17. Compression
18. CORS
19. Rate Limiting
20. HTTP Status Codes
21. REST API Best Practices

---

# 1. NestJS Basics

## What is NestJS?

NestJS is a progressive Node.js framework built with TypeScript for building scalable and maintainable server-side applications.

Features

- TypeScript First
- Dependency Injection
- Modular Architecture
- Decorator Based
- Express/Fastify Support

---

## Why NestJS?

- Clean architecture
- Enterprise ready
- Easy testing
- Built-in Dependency Injection
- Excellent TypeScript support

---

## What is a Module?

A module groups related functionality together.

Example

```ts
@Module({
  imports: [],
  controllers: [],
  providers: [],
})
export class AuthModule {}
```

Every NestJS application has a root module called AppModule.

---

# 2. Dependency Injection

## What is Dependency Injection?

Dependency Injection (DI) is a design pattern where dependencies are provided by NestJS instead of creating them manually.

Without DI

```ts
const prisma = new PrismaClient();
```

With DI

```ts
constructor(private prisma: PrismaService) {}
```

Benefits

- Loose coupling
- Easy testing
- Better maintainability
- Singleton instances

---

## What is IoC?

Inversion of Control.

NestJS controls object creation instead of developers.

---

# 3. Configuration

## Why use ConfigModule?

To centralize application configuration.

Example

```env
DATABASE_URL=...
JWT_SECRET=...
REDIS_URL=...
```

Access

```ts
configService.get('DATABASE_URL')
```

---

## Why validate environment variables?

To fail fast if required variables are missing.

Benefits

- Detect configuration errors early
- Prevent production crashes

---

# 4. Docker

## Why use Docker?

Docker provides consistent environments.

Benefits

- Same environment everywhere
- Easy onboarding
- No dependency conflicts

---

## Difference between Docker Image and Container

Image

Blueprint

Container

Running instance of image

---

## Why use Docker Compose?

To run multiple services.

Example

- PostgreSQL
- Redis
- Backend

---

# 5. PostgreSQL

## Why PostgreSQL?

- Open Source
- ACID compliant
- Reliable
- Supports JSON
- Excellent performance

---

## Primary Key

Unique identifier for every row.

Usually

```
id
```

---

## Foreign Key

Creates relationship between tables.

---

## Index

Improves query performance.

Trade-off

Consumes extra storage.

---

# 6. Prisma

## What is Prisma?

Next-generation ORM for Node.js.

---

## Why Prisma?

- Type Safe
- Auto-generated Client
- Easy migrations
- Great developer experience

---

## Prisma Components

schema.prisma

Defines database schema

Prisma Client

Generated query builder

Migration

Database version control

---

## Migration

Updates database structure safely.

Commands

```
pnpm prisma migrate dev
pnpm prisma generate
```

---

# 7. Prisma Service

## Why create PrismaService?

Avoid multiple PrismaClient instances.

Benefits

- Singleton
- Better performance
- Prevent connection exhaustion

---

## What lifecycle hooks are used?

OnModuleInit

Connect database

OnModuleDestroy

Disconnect database

---

# 8. DTO

## What is DTO?

Data Transfer Object.

Used for

- Validation
- Type Safety
- API Documentation

---

## Why not use interfaces?

Interfaces disappear after compilation.

DTO classes exist at runtime.

Validation decorators require runtime metadata.

---

# 9. ValidationPipe

## What is ValidationPipe?

Automatically validates incoming requests.

---

## whitelist

Removes unknown fields.

---

## forbidNonWhitelisted

Throws error for extra fields.

---

## transform

Converts request values.

Example

```
"10"

↓

10
```

---

## enableImplicitConversion

Automatically converts primitive types.

---

# 10. Exception Filter

## Why use Exception Filter?

Centralized error handling.

Without filter

Different error formats.

With filter

Consistent responses.

---

## Benefits

- Cleaner API
- Easier frontend handling
- Better debugging

---

# 11. Interceptor

## What is Interceptor?

Runs before and after controller execution.

Uses

- Response formatting
- Logging
- Performance monitoring
- Response mapping

---

## Middleware vs Guard vs Interceptor vs Filter

Middleware

Runs before routing.

Guard

Authorization.

Interceptor

Before & after controller.

Filter

Handles exceptions.

---

# 12. Swagger

## What is Swagger?

Interactive API documentation.

---

## Benefits

- API testing
- Better documentation
- OpenAPI generation

---

## Common Decorators

@ApiTags

@ApiOperation

@ApiResponse

@ApiProperty

---

# 13. Helmet

## What is Helmet?

Middleware that adds HTTP security headers.

Protects against

- Clickjacking
- MIME sniffing
- Some XSS attacks

---

# 14. Compression

## Why Compression?

Reduces response size.

Benefits

- Faster APIs
- Lower bandwidth

---

# 15. CORS

## What is CORS?

Cross-Origin Resource Sharing.

Allows browser requests from approved origins.

---

## Why do browsers block requests?

Same-Origin Policy.

CORS relaxes this securely.

---

# 16. Rate Limiting

## Why Rate Limiting?

Prevent

- DDoS
- Brute Force
- API Abuse
- Spam

---

## What is HTTP 429?

Too Many Requests.

---

## What package did we use?

@nestjs/throttler

---

## Production Recommendation

Different limits

Login

5/min

Register

10/min

Public APIs

100/min

---

# 17. HTTP Status Codes

200

OK

201

Created

204

No Content

400

Bad Request

401

Unauthorized

403

Forbidden

404

Not Found

409

Conflict

422

Validation Error

429

Too Many Requests

500

Internal Server Error

---

# 18. REST API Best Practices

Use nouns

```
/users
```

Not

```
/getUsers
```

---

Use plural names

```
/products
```

---

Version APIs

```
/api/v1
```

---

Return consistent responses

---

Validate every request

---

Use correct status codes

---

Document APIs

---

Secure APIs

---

# 19. Common Interview Questions

## Why NestJS over Express?

NestJS provides architecture, dependency injection, decorators, modules, testing support, and better scalability.

---

## Why Prisma over Sequelize?

Prisma offers type safety, automatic client generation, easier migrations, and an excellent developer experience.

---

## Why DTO instead of interface?

Interfaces are removed after TypeScript compilation, while DTO classes remain at runtime, allowing validation decorators to work.

---

## Why use ValidationPipe globally?

To ensure every incoming request is validated consistently before reaching business logic.

---

## Why use Interceptors?

To modify or transform requests and responses without changing controller code.

---

## Why use Exception Filters?

To centralize error handling and provide consistent error responses.

---

## Why use Swagger?

To generate interactive API documentation and simplify API testing.

---

## Why use Helmet?

To add secure HTTP headers that reduce common web vulnerabilities.

---

## Why use CORS?

To allow trusted frontend applications to communicate with the backend while enforcing browser security.

---

## Why use Rate Limiting?

To protect APIs from abuse, brute-force attacks, and denial-of-service attempts.

---

## Why use PrismaService Singleton?

To reuse a single database connection throughout the application, improving performance and preventing connection exhaustion.

---

# Quick Revision

NestJS

Framework

Module

Feature grouping

Controller

Receives requests

Service

Business logic

Provider

Injectable dependency

DTO

Request validation

ValidationPipe

Input validation

Interceptor

Modify request/response

Filter

Handle exceptions

Guard

Authorization

Middleware

Pre-processing

Swagger

API Docs

Helmet

Security headers

Compression

Reduce payload

CORS

Cross-origin access

Throttler

Rate limiting

Prisma

ORM

Migration

Database versioning

Docker

Containerization

Redis

Caching / Pub-Sub / Sessions

PostgreSQL

Relational Database