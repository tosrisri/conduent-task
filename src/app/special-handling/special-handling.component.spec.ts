import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecialHandlingComponent } from './special-handling.component';

describe('SpecialHandlingComponent', () => {
  let component: SpecialHandlingComponent;
  let fixture: ComponentFixture<SpecialHandlingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpecialHandlingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecialHandlingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
