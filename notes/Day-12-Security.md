Objective

Protect the API against common attacks.

Helmet

Adds security headers.

Examples

X-Frame-Options

Content-Security-Policy

X-Content-Type-Options
Compression

Compresses responses.

Benefits

Smaller payloads
Faster APIs
CORS

Allows frontend domains to access backend.

Configured

Origin

Methods

Headers

Credentials
Rate Limiting

Implemented using

@nestjs/throttler

Configuration

ttl: 60000
limit: 100

Testing

200
200
200
...
429 Too Many Requests
Request Flow
Request
   │
   ▼
Helmet
   │
   ▼
CORS
   │
   ▼
Compression
   │
   ▼
Throttler
   │
   ▼
Controller