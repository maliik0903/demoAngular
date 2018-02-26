import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DétailsEmployeComponent } from './détails-employe.component';

describe('DétailsEmployeComponent', () => {
  let component: DétailsEmployeComponent;
  let fixture: ComponentFixture<DétailsEmployeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DétailsEmployeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DétailsEmployeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
