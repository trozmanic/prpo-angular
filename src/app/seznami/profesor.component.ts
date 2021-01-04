import { Component, OnInit } from '@angular/core';
import {SeznamiService} from './services/seznami.service';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {Location} from '@angular/common';
import {switchMap} from 'rxjs/operators';
import {Profesor} from './models/profesor';

@Component({
  selector: 'app-profesor',
  templateUrl: './profesor.component.html'
})
export class ProfesorComponent implements OnInit {

  public profesor: Profesor

  constructor(private seznamService: SeznamiService,
              private route: ActivatedRoute,
              private location: Location,
              private router: Router) { }

  ngOnInit(): void {
    this.route.params.pipe(
        switchMap((params: Params) => this.seznamService.getProfesor(params['id'])))
        .subscribe(prof => this.profesor = prof);
  }

  nazaj(): void {
    this.router.navigate(['profesorji']);
  }

  brisiGovorilnoUro(id) {
    this.seznamService.delete(id)
        .subscribe(() => {
          this.seznamService.getProfesor(this.profesor.id).subscribe(prof => this.profesor = prof)
        })
  }

  brisiProf(id) {
    this.seznamService.deleteProfesor(id)
        .subscribe(() => {
          this.router.navigate(['profesorji']);
        })
  }

}
