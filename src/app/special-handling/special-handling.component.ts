import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-special-handling',
  templateUrl: './special-handling.component.html',
  styleUrls: ['./special-handling.component.css']
})
export class SpecialHandlingComponent implements OnInit {
  showChild: boolean;
  constructor() { }

  ngOnInit() {
    this.showChild = true;
  }

  toogleChild() {
    this.showChild = !this.showChild;
  }



}
