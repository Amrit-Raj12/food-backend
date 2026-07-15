# Configuration

## Packages

@nestjs/config

Joi

dotenv

## Why?

Never hardcode secrets.

Environment-specific configuration.

Validation during startup.

## Environment Files

.env.development

.env.production

.env.test

.env.example

## Validation

Joi ensures

DATABASE_URL

JWT_SECRET

REDIS_HOST

PORT

exist before application starts.

## Benefits

Fail fast.

Safer production deployments.