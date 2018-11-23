import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductionApiComponent } from './production-api.component';

describe('ProductionApiComponent', () => {
  let component: ProductionApiComponent;
  let fixture: ComponentFixture<ProductionApiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductionApiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductionApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
