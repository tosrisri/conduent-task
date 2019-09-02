import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EimInsuranceComponent } from './eim-insurance.component';

describe('EimInsuranceComponent', () => {
  let component: EimInsuranceComponent;
  let fixture: ComponentFixture<EimInsuranceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EimInsuranceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EimInsuranceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
