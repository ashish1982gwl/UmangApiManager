import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageAPIComponent } from './manage-api.component';

describe('ManageAPIComponent', () => {
  let component: ManageAPIComponent;
  let fixture: ComponentFixture<ManageAPIComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageAPIComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageAPIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
