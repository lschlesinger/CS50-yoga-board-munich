import {Component, OnInit} from '@angular/core';
import {YogaClass} from "../../types";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  classes: YogaClass[];

  constructor(private http: HttpClient) {
    this.http.get("/api/yoga-class/").subscribe((classes: YogaClass[]) => {
      this.classes = classes;
    })
  }

  ngOnInit() {
  }

}
