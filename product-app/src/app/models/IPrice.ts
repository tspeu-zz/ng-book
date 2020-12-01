export interface IPrice {
  calculateTotalPrice(basePrice: number, state: string): number;
}
