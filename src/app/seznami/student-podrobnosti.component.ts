import { Component, OnInit } from '@angular/core';

import {Student} from './models/student';

import {SeznamiService} from './services/seznami.service';
import {ActivatedRoute, Params, Router} from "@angular/router";
import {Location} from "@angular/common";
import {switchMap} from "rxjs/operators";

import {PrijavaOdjavaDto} from './models/prijavaodjavadto';

@Component({
  selector: 'app-seznam-studentov',
  templateUrl: './student-podrobnosti.component.html'
})
export class StudentPodrobnostiComponent implements OnInit {

  public student: Student;

  constructor(private service: SeznamiService,
              private route: ActivatedRoute,
              private location: Location,
              private router: Router) {}
  ngOnInit(): void {
    this.route.params.pipe(
        switchMap((params: Params) => this.service.pridobiStudenta(+params['id'])))
        .subscribe(s => this.student = s);
  }


  nazaj(): void {
    this.router.navigate(['/studenti']);
  }

  odjava(id): void {

    let dto: PrijavaOdjavaDto = new PrijavaOdjavaDto();
    dto.student_id = this.student.id;
    dto.govorilna_ura_id = id;

    this.service.odjavaStudenta(dto).subscribe(t => {
      this.service.pridobiStudenta(this.student.id).subscribe( s => this.student = s);
    });
  }

}

