import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TpAttorneyComponent } from './tp-attorney.component';

describe('TpAttorneyComponent', () => {
  let component: TpAttorneyComponent;
  let fixture: ComponentFixture<TpAttorneyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TpAttorneyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TpAttorneyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
