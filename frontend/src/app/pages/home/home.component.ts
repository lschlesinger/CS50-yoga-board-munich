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
  listOfDisplayData: YogaClass[];
  sortName: string | null = null;
  sortValue: string | null = null;

  constructor(private http: HttpClient) {
    this.http.get("/api/yoga-class/").subscribe((classes: YogaClass[]) => {
      this.classes = classes;
      this.sort({key: null, value: null});
    })
  }

  ngOnInit() {
  }

  sort(sort: { key: string; value: string }): void {
    this.sortName = sort.key;
    this.sortValue = sort.value;
    const data = [...this.classes];
    if (this.sortName && this.sortValue) {
      const sorting = (a, b) => {
        if (this.sortValue === 'ascend') {
          if (this.sortName === 'date') {
            return a[this.sortName] > b[this.sortName] ? 1 : -1;
          }
          if (a[this.sortName].toLowerCase() > b[this.sortName].toLowerCase()) {
            return 1;
          }
          return -1;
        }
        if (this.sortName === 'date') {
          return b[this.sortName] > a[this.sortName] ? 1 : -1;
        }
        if (b[this.sortName].toLowerCase() > a[this.sortName].toLowerCase()) {
          return 1;
        }
        return -1;
      };
      this.listOfDisplayData = data.sort(sorting);
    } else {
      this.listOfDisplayData = data;
    }
  }
}
