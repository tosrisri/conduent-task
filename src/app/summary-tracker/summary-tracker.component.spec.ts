import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SummaryTrackerComponent } from './summary-tracker.component';

describe('SummaryTrackerComponent', () => {
  let component: SummaryTrackerComponent;
  let fixture: ComponentFixture<SummaryTrackerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SummaryTrackerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SummaryTrackerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
