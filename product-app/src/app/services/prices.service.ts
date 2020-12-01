import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PricesService {

  constructor() { }

  calculateTotalPrice(basePrice: number, state: string) {
    // e.g. Imgine that in our "real" application we're
    // accessing a real database of state sales tax amounts
    const tax = Math.random();
    console.log('PricesService total price ->', basePrice + tax);
    return basePrice + tax;
  }
}
