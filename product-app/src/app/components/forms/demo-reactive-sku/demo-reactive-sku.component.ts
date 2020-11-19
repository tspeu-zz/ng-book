import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ValidatorCustom} from '../validator';

@Component({
  selector: 'demo-reactive-sku',
  templateUrl: './demo-reactive-sku.component.html',
  styleUrls: ['./demo-reactive-sku.component.scss']
})
export class DemoReactiveSkuComponent implements OnInit {

  myForm: FormGroup;
  formControls: AbstractControl;

  constructor(private fb: FormBuilder) {
    this.myForm = fb.group({
      'sku': ['', Validators.compose([
                    Validators.required, Validators.minLength(2),
                    ValidatorCustom.skuValidator
                  ])
    ]
    });

    this.formControls = this.myForm.controls['sku'];
  }

  ngOnInit(): void {
  }

  onSubmit(value: string): void {
    console.log('form:->',value);

  }

}
