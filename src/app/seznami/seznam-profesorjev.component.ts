import { Component, OnInit } from '@angular/core';
import {SeznamiService} from './services/seznami.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Profesor} from './models/profesor';
import {Location} from '@angular/common';

@Component({
  selector: 'app-seznam-profesorjev',
  templateUrl: './seznam-profesorjev.component.html'
})
export class SeznamProfesorjevComponent implements OnInit {


  public profesorji: Profesor[]

  constructor(private seznamiService: SeznamiService,
              private route: ActivatedRoute,
              private location: Location,
              private router: Router) { }

  ngOnInit(): void {
    this.getProfesorji()
  }


  getProfesorji() {
    this.seznamiService.getProfesorji()
        .subscribe(profesorji => this.profesorji = profesorji)
  }

  nazaj(): void {
    this.router.navigate(['govorilne-ure']);
  }

}
