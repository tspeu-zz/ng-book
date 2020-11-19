import { Component, OnInit, HostBinding, Input } from '@angular/core';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'product-row',
  templateUrl: './product-row.component.html',
  styleUrls: ['./product-row.component.scss']
})
export class ProductRowComponent implements OnInit {
  @HostBinding('attr.class') cssClass = 'row mt-2';
  @Input() product: Product;

  constructor() { }

  ngOnInit(): void {
  }

}
