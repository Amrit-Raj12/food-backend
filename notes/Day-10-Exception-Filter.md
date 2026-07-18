Objective

Handle all application errors in one place.

Response Format
{
  "success": false,
  "statusCode": 400,
  "message": "...",
  "timestamp": "...",
  "path": "..."
}
Why?

Without filters

Every controller handles errors differently.

With filters

All errors have same format.
Flow
Throw Error
     │
     ▼
Exception Filter
     │
     ▼
Formatted Response
Types
HttpException
BadRequestException
UnauthorizedException
NotFoundException
ForbiddenException
ThrottlerException
Best Practices
Never expose stack traces
Log internal errors
Return meaningful messages

Git Commit

feat(core): add global exception filter