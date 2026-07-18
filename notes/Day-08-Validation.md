Objective

Validate every incoming request before reaching business logic.

Global Validation Pipe

Configured in

main.ts

Options:

whitelist: true
forbidNonWhitelisted: true
transform: true
enableImplicitConversion: true
DTO

Data Transfer Object

Used to validate

body
params
query

Example

class PaginationDto {
  page: number;
  limit: number;
}
Validation Flow
Client
   │
   ▼
ValidationPipe
   │
   ▼
DTO
   │
   ▼
Controller
Decorators
@IsString()
@IsEmail()
@IsOptional()
@IsInt()
@Min()
@Max()
Best Practices
Validate everything
Never trust client input
Separate DTOs by feature
Interview Questions

Difference between Entity and DTO?

DTO validates incoming data.

Entity represents database data.

Git Commit

feat(validation): add global validation pipe and DTO validation