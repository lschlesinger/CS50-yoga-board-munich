import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {YogaClass, YogaType} from "../../types";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {differenceInCalendarDays} from 'date-fns'

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
  validateForm: FormGroup;
  types = {
    [YogaType.BIKRAM]: "Bikram",
    [YogaType.FLOW]: "Flow",
    [YogaType.HATHA]: "Hatha",
    [YogaType.VINYASA]: "Vinyasa",
    [YogaType.YIN]: "Yin"
  };
  today = new Date();

  constructor(private fb: FormBuilder, private httpClient: HttpClient, private router: Router) {
    this.validateForm = this.fb.group({
      name: [null, [Validators.required]],
      location: [null, [Validators.required]],
      description: [null, [Validators.required]],
      date: [null, [Validators.required]],
      teacher: [null, [Validators.required]],
      type: [null, [Validators.required]],
    })
  }

  ngOnInit() {
  }

  submitForm() {
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }
    if (this.validateForm.valid) {
      const yogaClass: YogaClass = {
        name: this.validateForm.get('name').value,
        date: this.validateForm.get('date').value,
        type: this.validateForm.get('type').value,
        description: this.validateForm.get('description').value,
        teacher: this.validateForm.get('teacher').value,
        location: this.validateForm.get('location').value,
      };
      this.httpClient.post('api/yoga-class/', yogaClass).subscribe((yogaClass: YogaClass) => {
        this.router.navigate(['/details/' + yogaClass.id]);
      })
    }
  }

  disabledDate = (current: Date): boolean => {
    // Can not select days before today and today
    return differenceInCalendarDays(current, this.today) < 0;
  };


}
