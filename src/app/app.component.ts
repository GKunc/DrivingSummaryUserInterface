import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'DrivingSummaryUserInterface';
  private http;
  private baseUrl;
  public startDate;
  public email;

  constructor(router: Router, http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
      this.http = http;
      this.baseUrl = baseUrl;
      this.startDate = new Date();
      this.email = "";
  }
}
