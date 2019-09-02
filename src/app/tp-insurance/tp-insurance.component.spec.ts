import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TpInsuranceComponent } from './tp-insurance.component';

describe('TpInsuranceComponent', () => {
  let component: TpInsuranceComponent;
  let fixture: ComponentFixture<TpInsuranceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TpInsuranceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TpInsuranceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
