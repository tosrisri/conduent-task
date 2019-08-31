import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-queued-actions',
  templateUrl: './queued-actions.component.html',
  styleUrls: ['./queued-actions.component.css']
})
export class QueuedActionsComponent implements OnInit {

  showChild: boolean;
  constructor() { }

  ngOnInit() {
    this.showChild = false;
  }

  toogleChild() {
    this.showChild = !this.showChild;
  }

}
