import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignAppsComponent } from './assign-apps.component';

describe('AssignAppsComponent', () => {
  let component: AssignAppsComponent;
  let fixture: ComponentFixture<AssignAppsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssignAppsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignAppsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
