import {Component, OnInit} from '@angular/core';
import {YogaClass} from "../../types";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  currClass: YogaClass;
  id: string;

  constructor(private route: ActivatedRoute, private router: Router, private httpClient: HttpClient) {
  }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = params.id;
      this.httpClient.get('api/yoga-class/' + this.id).subscribe(
        (currClass: YogaClass) => {
          this.currClass = currClass;
        }
      )
    })
  }

  onBack(): void {
    this.router.navigate(['/']);
  }

}
