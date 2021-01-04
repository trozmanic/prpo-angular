import { Component, OnInit } from '@angular/core';
import {SeznamiService} from './services/seznami.service';
import {Router} from '@angular/router';
import {Profesor} from './models/profesor';

@Component({
  selector: 'app-seznam-profesorjev',
  templateUrl: './seznam-profesorjev.component.html'
})
export class SeznamProfesorjevComponent implements OnInit {


  public profesorji: Profesor[]

  constructor(private seznamiService: SeznamiService,
              private router: Router) { }

  ngOnInit(): void {
    this.getProfesorji()
  }


  getProfesorji() {
    this.seznamiService.getProfesorji()
        .subscribe(profesorji => this.profesorji = profesorji)
  }

}
