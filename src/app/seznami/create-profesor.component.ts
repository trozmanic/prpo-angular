import { Component, OnInit } from '@angular/core';
import {Profesor} from './models/profesor';
import {SeznamiService} from './services/seznami.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'app-create-profesor',
  templateUrl: './create-profesor.component.html'
})
export class CreateProfesorComponent implements OnInit {

  constructor(private seznamService: SeznamiService,
              private route: ActivatedRoute,
              private location: Location,
              private router: Router) { }

  public profesor: Profesor = new Profesor();


  ngOnInit(): void {
  }


  nazaj(): void {
    this.router.navigate(['profesorji']);
  }

  submitForm() {
    this.seznamService.createProfesor(this.profesor)
        .subscribe(() => {
          this.nazaj()
        })
  }

}
