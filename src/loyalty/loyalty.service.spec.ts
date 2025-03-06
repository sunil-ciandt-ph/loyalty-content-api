import { Test, TestingModule } from '@nestjs/testing';
import { HttpService } from '@nestjs/axios';
import { LoyaltyService } from './loyalty.service';
import { of } from 'rxjs';
import { ConfigService } from '@nestjs/config';
import { AxiosResponse } from 'axios';

describe('LoyaltyService', () => {
  let service: LoyaltyService;
  let httpService: HttpService;
  let configService: ConfigService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        LoyaltyService,
        {
          provide: HttpService,
          useValue: {
            get: jest.fn(),
          },
        },
        {
          provide: ConfigService,
          useValue: {
            get: jest.fn().mockReturnValue('https://your-drupal-cms.com/api'),
          },
        },
      ],
    }).compile();

    service = module.get<LoyaltyService>(LoyaltyService);
    httpService = module.get<HttpService>(HttpService);
    configService = module.get<ConfigService>(ConfigService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('getBenefits', () => {
    it('should return benefits', async () => {
      const mockResponse: AxiosResponse<string> = {
        data: 'some benefits',
        status: 200,
        statusText: 'OK',
        headers: {}, // You can define this as needed
        config: {
          headers: {
            Accept: 'application/json', // Mocking headers as needed
          } as any,
        },
      };

      jest.spyOn(httpService, 'get').mockReturnValue(of(mockResponse));

      const result = await service.getBenefits();
      expect(result).toEqual(mockResponse.data);
      expect(httpService.get).toHaveBeenCalledWith('https://your-drupal-cms.com/api/benefits');
    });
  });

  // Add tests for other methods (getUserBenefits, getMarketingBanners, etc.)
});