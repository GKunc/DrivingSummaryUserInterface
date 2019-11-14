import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'DrivingSummaryUserInterface';
  private http;
  private baseUrl;
  public startDate;
  public email;

  constructor(router: Router, http: HttpClient) {
      this.http = http;
      this.baseUrl = "https://gkunc.github.io/DrivingSummaryUserInterface/";
      this.startDate = new Date();
      this.email = "";
  }
}
