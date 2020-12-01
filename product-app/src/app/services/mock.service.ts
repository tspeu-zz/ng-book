import { IPrice } from '../models/IPrice';

// import { IPrice} from '../models/IPrice';

export class MockService implements IPrice{


  calculateTotalPrice(basePrice: number, state: string): number {
    if (state === 'CN'){
      return basePrice + (7/100);
    }
    return basePrice;
  }

}

