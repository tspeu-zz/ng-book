import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoReactiveSkuComponent } from './demo-reactive-sku.component';

describe('DemoReactiveSkuComponent', () => {
  let component: DemoReactiveSkuComponent;
  let fixture: ComponentFixture<DemoReactiveSkuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoReactiveSkuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoReactiveSkuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
