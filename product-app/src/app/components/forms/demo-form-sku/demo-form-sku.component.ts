import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'demo-form-sku',
  templateUrl: './demo-form-sku.component.html',
  styleUrls: ['./demo-form-sku.component.scss']
})
export class DemoFormSkuComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(form: any){
    console.log(form);
  }

}
