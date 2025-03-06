import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { ConfigService } from '@nestjs/config';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class LoyaltyService {
  private cmsBaseUrl: string;

  constructor(
    private readonly httpService: HttpService,
    private readonly configService: ConfigService,
  ) {
    this.cmsBaseUrl = this.configService.get<string>('CMS_BASE_URL')!;
  }

  async getBenefits() {
    const response = await firstValueFrom(this.httpService.get(`${this.cmsBaseUrl}/benefits`));
    return response.data;
  }

  async getUserBenefits(userId: string) {
    const response = await firstValueFrom(this.httpService.get(`${this.cmsBaseUrl}/user-benefits/${userId}`));
    return response.data;
  }

  async getMarketingBanners() {
    const response = await firstValueFrom(this.httpService.get(`${this.cmsBaseUrl}/marketing-banners`));
    return response.data;
  }

  // Additional methods can be added here as needed
}