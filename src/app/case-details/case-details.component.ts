import { Component, OnInit } from '@angular/core';
import { IncomingMessage } from 'http';

@Component({
  selector: 'app-case-details',
  templateUrl: './case-details.component.html',
  styleUrls: ['./case-details.component.css']
})
export class CaseDetailsComponent implements OnInit {
caseID: number;
caseStatus: string;
  fileID: number;
  clientID: number;
  clientName: string;
  fundingType: string;
  groupID: number;
  groupName: string;
  claimOfficeID: number;
  claimOffice: string;

  constructor() { }

  ngOnInit() {
    this.caseID = 1009951;
    this.caseStatus = "Active State";
    this.fileID = 87202893;
    this.clientID = 736188;
    this.clientName = "MicroSoft Inc.";
    this.fundingType = "Self Funding";
    this.groupID = 7266;
    this.groupName = "Microsoft Internet Boys";
    this.claimOfficeID = 1002;
    this.claimOffice = "WaveBox Office, Wisconsin";
  }

}
