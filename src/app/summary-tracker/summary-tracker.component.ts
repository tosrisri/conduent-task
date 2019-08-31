import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-summary-tracker',
  templateUrl: './summary-tracker.component.html',
  styleUrls: ['./summary-tracker.component.css']
})
export class SummaryTrackerComponent implements OnInit {
  showChild: boolean;
  constructor() { }

  ngOnInit() {
    this.showChild = false;
  }

  toogleChild() {
    this.showChild = !this.showChild;
  }

}
