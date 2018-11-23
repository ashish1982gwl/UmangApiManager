import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LimitpriceComponent } from './limitprice.component';

describe('LimitpriceComponent', () => {
  let component: LimitpriceComponent;
  let fixture: ComponentFixture<LimitpriceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LimitpriceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LimitpriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
