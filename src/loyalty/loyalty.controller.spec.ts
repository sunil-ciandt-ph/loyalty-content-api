import { Test, TestingModule } from '@nestjs/testing';
import { LoyaltyController } from './loyalty.controller';
import { LoyaltyService } from './loyalty.service';

describe('LoyaltyController', () => {
  let controller: LoyaltyController;
  let service: LoyaltyService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LoyaltyController],
      providers: [
        {
          provide: LoyaltyService,
          useValue: {
            getBenefits: jest.fn(),
            getUserBenefits: jest.fn(),
            getMarketingBanners: jest.fn(),
          },
        },
      ],
    }).compile();

    controller = module.get<LoyaltyController>(LoyaltyController);
    service = module.get<LoyaltyService>(LoyaltyService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('getBenefits', () => {
    it('should return the benefits', async () => {
      const result = ['benefit1', 'benefit2'];
      jest.spyOn(service, 'getBenefits').mockResolvedValue(result);

      expect(await controller.getBenefits()).toBe(result);
    });
  });

  // Add tests for other controller methods (getUserBenefits, getMarketingBanners, etc.)
});