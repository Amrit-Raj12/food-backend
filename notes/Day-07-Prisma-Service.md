Objective

Create a reusable Prisma service that maintains a single database connection throughout the application's lifecycle.

Why?

Creating a new PrismaClient instance for every request wastes database connections and memory.

Using a singleton:

Reduces connection overhead
Prevents connection exhaustion
Improves performance
Architecture
Controller
    │
    ▼
Service
    │
    ▼
PrismaService (Singleton)
    │
    ▼
PostgreSQL
Implementation

Created:

src/prisma/
    prisma.module.ts
    prisma.service.ts

Registered globally:

imports: [PrismaModule]

Injected anywhere:

constructor(private prisma: PrismaService) {}
Lifecycle Hooks

Implemented:

OnModuleInit
OnModuleDestroy
Graceful shutdown
Best Practices
One PrismaClient instance
Use dependency injection
Never instantiate PrismaClient inside services
Interview Questions
Why use PrismaService?

To reuse a single database connection.

What is a singleton?

A class with only one instance shared across the application.

Why not create PrismaClient manually?

It creates unnecessary connections and hurts performance.

Git Commit
feat(prisma): add PrismaService singleton with graceful shutdown