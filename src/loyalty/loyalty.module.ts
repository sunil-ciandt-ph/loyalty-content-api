import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios'; // Import HttpModule
import { ConfigModule } from '@nestjs/config'; // Import ConfigModule
import { LoyaltyController } from './loyalty.controller';
import { LoyaltyService } from './loyalty.service';

@Module({
  imports: [
    HttpModule, // Add HttpModule here
    ConfigModule, // Ensure ConfigModule is imported to use ConfigService
  ],
  controllers: [LoyaltyController],
  providers: [LoyaltyService],
})
export class LoyaltyModule {}