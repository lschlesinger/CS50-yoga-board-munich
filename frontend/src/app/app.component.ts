import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {YogaClass} from "./types";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  classes: YogaClass[];

  constructor(private http:HttpClient) {
    this.http.get("/api/yoga-class/").subscribe((classes: YogaClass[]) => {
      this.classes = classes;
    })
  }
}
