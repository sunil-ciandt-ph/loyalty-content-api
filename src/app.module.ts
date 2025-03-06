import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { LoyaltyModule } from './loyalty/loyalty.module';

@Module({
  imports: [
    ConfigModule.forRoot(), // Load environment variables from .env file
    LoyaltyModule,
  ],
})
export class AppModule {}