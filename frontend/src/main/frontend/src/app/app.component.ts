import {Component, OnInit} from '@angular/core';
import {Http} from "@angular/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private http: Http) {
  }

  ngOnInit() {
    // Sets CSRF protection cookie
    this.http.get("/onload").forEach(r => {
    });

  }

  loadedFeature = 'recipe';

  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }
}
