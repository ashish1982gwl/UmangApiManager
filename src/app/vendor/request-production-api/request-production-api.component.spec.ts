import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestProductionApiComponent } from './request-production-api.component';

describe('RequestProductionApiComponent', () => {
  let component: RequestProductionApiComponent;
  let fixture: ComponentFixture<RequestProductionApiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestProductionApiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestProductionApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
