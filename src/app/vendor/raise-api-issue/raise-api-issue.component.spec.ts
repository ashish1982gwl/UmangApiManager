import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RaiseApiIssueComponent } from './raise-api-issue.component';

describe('RaiseApiIssueComponent', () => {
  let component: RaiseApiIssueComponent;
  let fixture: ComponentFixture<RaiseApiIssueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RaiseApiIssueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RaiseApiIssueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
