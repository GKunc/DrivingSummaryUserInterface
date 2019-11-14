import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import * as $ from "jquery";

const BASE_URL = 'https://gkunc.github.io/DrivingSummaryUI/';

@Component({
  selector: 'app-summary-creator-component',
  templateUrl: './summary-creator.component.html'
})

export class SummaryCreatorComponent {

  private http;
  private baseUrl;
  public startDate;
  public email;

  constructor(router: Router, http: HttpClient) {
      this.http = http;
      this.baseUrl = BASE_URL;
      this.startDate = new Date();
      this.email = "";
  }
}


