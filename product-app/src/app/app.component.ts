import { Component } from '@angular/core';
import { Product } from './models/product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'product-app';
  productos: Product[];
  /**
   *
   */
  constructor() {
    this.productos= [
      new Product(
      "NICEHAT",
      "A Nice Black Hat",
      "/assets/images/hat.jpg",
      ["Men","Accessories", "Hats"], 29.99),
      new Product(
        'NEATOJACKET',
        'Blue Jacket',
        '/assets/images/hat2.jpg',
        ['Women', 'Apparel', 'Jackets & Vests'],
        238.99),
        new Product(
          "NICEHAT2",
          "A Nice Black Hat",
          "/assets/images/hat3.jpg",
          ["Men","Accessories", "Hats"], 29.99),
    ];
  }
//


//
productSeleccionado(product: Product): void {
  console.log('Product clicked: ', product);
}
//

}
