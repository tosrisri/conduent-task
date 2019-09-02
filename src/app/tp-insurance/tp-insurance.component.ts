import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tp-insurance',
  templateUrl: './tp-insurance.component.html',
  styleUrls: ['./tp-insurance.component.css']
})
export class TpInsuranceComponent implements OnInit {

  inputText: string = "Initial Valus";
  mainPhoneNumber: number = 1234567890;

  constructor() { }

  ngOnInit() {
  }

}
