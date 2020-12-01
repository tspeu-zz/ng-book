import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YoutubesearchComponent } from './youtubesearch.component';

describe('YoutubesearchComponent', () => {
  let component: YoutubesearchComponent;
  let fixture: ComponentFixture<YoutubesearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YoutubesearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YoutubesearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
