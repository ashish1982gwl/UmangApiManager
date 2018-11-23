import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnboardingRequestComponent } from './onboarding-request.component';

describe('OnboardingRequestComponent', () => {
  let component: OnboardingRequestComponent;
  let fixture: ComponentFixture<OnboardingRequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnboardingRequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnboardingRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
