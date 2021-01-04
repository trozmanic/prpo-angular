import { Component, OnInit } from '@angular/core';

import {Student} from './models/student';

import {SeznamiService} from './services/seznami.service';
import {ActivatedRoute, Router} from "@angular/router";
import {Location} from "@angular/common";

@Component({
  selector: 'app-seznam-studentov',
  templateUrl: './seznam-studentov.component.html'
})
export class SeznamStudentovComponent implements OnInit {

  public studenti: Student[];

  constructor(private service: SeznamiService,
              private route: ActivatedRoute,
              private location: Location,
              private router: Router) {}
  ngOnInit(): void {
    this.service.pridobiStudente().subscribe( s => this.studenti = s);
  }

  podrobnostiStudenta(id): void {
    this.router.navigate(['/studenti/' + id]);
  }
  brisiStudenta(id): void {
    this.service.brisiStudenta(id).subscribe(t => {
      this.service.pridobiStudente().subscribe( s => this.studenti = s);
    });
  }
  nazaj(): void {
    this.router.navigate(['govorilne-ure']);
  }

}
