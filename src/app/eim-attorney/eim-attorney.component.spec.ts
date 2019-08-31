import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EimAttorneyComponent } from './eim-attorney.component';

describe('EimAttorneyComponent', () => {
  let component: EimAttorneyComponent;
  let fixture: ComponentFixture<EimAttorneyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EimAttorneyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EimAttorneyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
