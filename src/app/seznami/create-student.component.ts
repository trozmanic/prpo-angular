import { Component, OnInit } from '@angular/core';
import {Profesor} from './models/profesor';
import {SeznamiService} from './services/seznami.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Location} from '@angular/common';
import {Student} from "./models/student";

@Component({
  selector: 'app-create-student',
  templateUrl: './create-student.component.html'
})
export class CreateStudentComponent implements OnInit {

  constructor(private seznamService: SeznamiService,
              private route: ActivatedRoute,
              private location: Location,
              private router: Router) { }

  public student: Student = new Student();


  ngOnInit(): void {
  }


  nazaj(): void {
    this.router.navigate(['/studenti']);
  }

  submitForm() {
    this.seznamService.createStudent(this.student)
        .subscribe(() => {
          this.nazaj()
        })
  }

}
