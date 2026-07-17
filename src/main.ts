import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';

import { AppModule } from './app.module';
import { PrismaService } from './prisma/prisma.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Global API Prefix
  app.setGlobalPrefix('api/v1');

  // Global Validation
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
      transformOptions: {
        enableImplicitConversion: true,
      },
    }),
  );

  // Prisma Shutdown Hooks
  const prismaService = app.get(PrismaService);
  await prismaService.enableShutdownHooks(app);

  const port = process.env.PORT ?? 3000;

  await app.listen(port);

  console.log(`🚀 Server running on http://localhost:${port}`);
  console.log(`📚 API Base URL: http://localhost:${port}/api/v1`);
}

bootstrap();