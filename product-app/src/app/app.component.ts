import { Component, OnInit  } from '@angular/core';
import { Post } from './models/post.model';
import { Product } from './models/product.model';
import { DataService } from './services/data.service';
import { MockService } from './services/mock.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'product-app';
  productos: Product[];
  post: Post[]
  /**
   *
   */
  constructor(private dataService: DataService, private _MockService: MockService) {
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
  ngOnInit() {
    this.dataService.getPost().subscribe(posts => {
      this.post = posts;
      this.dataService.postData = posts;
    });
  }

//
  productSeleccionado(product: Product): void {
    console.log('Product clicked: ', product);
  }
  //
  onSelectedFilter(e) {
    this.getFilteredExpenseList();
  }
  //
  getFilteredExpenseList() {
    if (this.dataService.searchOption.length > 0)
      this.post = this.dataService.filteredListOptions();
    else {
      this.post = this.dataService.postData;
    }

  }
}
