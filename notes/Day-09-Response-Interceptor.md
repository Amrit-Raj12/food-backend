Objective

Return a consistent API response for every successful request.

Before
{
  "id":1
}
After
{
  "success": true,
  "statusCode": 200,
  "message": "Success",
  "data": {}
}
Benefits
Predictable responses
Easier frontend integration
Cleaner API documentation
Response Flow
Controller
    │
    ▼
Interceptor
    │
    ▼
Formatted Response
Best Practices
Never return raw objects
Keep response structure consistent
Interview Questions

Difference between Middleware and Interceptor?

Middleware runs before controller.

Interceptor runs before and after controller.

Git Commit

feat(core): add global response interceptor