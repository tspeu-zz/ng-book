import { Component, OnInit, Input, HostBinding } from '@angular/core';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'product-image',
  templateUrl: './product-image.component.html',
  styleUrls: ['./product-image.component.scss']
})
export class ProductImageComponent implements OnInit {
  @HostBinding('atrr.class') cssClass = 'ui small image';
  @Input() product: Product;

  constructor() { }

  ngOnInit(): void {
  }

}
