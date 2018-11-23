import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StagingApiComponent } from './staging-api.component';

describe('StagingApiComponent', () => {
  let component: StagingApiComponent;
  let fixture: ComponentFixture<StagingApiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StagingApiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StagingApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
