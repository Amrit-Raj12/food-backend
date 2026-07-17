import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './modules/auth/auth.module';
import { UsersModule } from './modules/users/users.module';
import { CategoriesModule } from './modules/categories/categories.module';
import { ProductsModule } from './modules/products/products.module';
import { CartModule } from './modules/cart/cart.module';
import { OrdersModule } from './modules/orders/orders.module';
import { PaymentsModule } from './modules/payments/payments.module';
import { NotificationsModule } from './modules/notifications/notifications.module';
import { HealthModule } from './modules/health/health.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [AuthModule, UsersModule, CategoriesModule, ProductsModule, CartModule, OrdersModule, PaymentsModule, NotificationsModule, HealthModule, PrismaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
