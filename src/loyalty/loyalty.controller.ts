import { Controller, Get, Param } from '@nestjs/common';
import { LoyaltyService } from './loyalty.service';

@Controller('loyalty')
export class LoyaltyController {
  constructor(private readonly loyaltyService: LoyaltyService) {}

  @Get('benefits')
  async getBenefits() {
    return this.loyaltyService.getBenefits();
  }

  @Get('user-benefits/:userId')
  async getUserBenefits(@Param('userId') userId: string) {
    return this.loyaltyService.getUserBenefits(userId);
  }

  @Get('marketing-banners')
  async getMarketingBanners() {
    return this.loyaltyService.getMarketingBanners();
  }

  // Additional routes can be added here as needed
}