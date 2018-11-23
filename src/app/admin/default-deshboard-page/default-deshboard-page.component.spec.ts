import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaultDeshboardPageComponent } from './default-deshboard-page.component';

describe('DefaultDeshboardPageComponent', () => {
  let component: DefaultDeshboardPageComponent;
  let fixture: ComponentFixture<DefaultDeshboardPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DefaultDeshboardPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DefaultDeshboardPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
