import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QueuedActionsComponent } from './queued-actions.component';

describe('QueuedActionsComponent', () => {
  let component: QueuedActionsComponent;
  let fixture: ComponentFixture<QueuedActionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QueuedActionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QueuedActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
