import {Component} from '@angular/core';
import {Router, Params, ActivatedRoute} from '@angular/router';

import {SeznamiService} from './services/seznami.service';
import { Artikel } from './models/artikel';
import { switchMap } from 'rxjs/operators';
import {GovorilnaUra} from "./models/govorilnaura";

@Component({
    moduleId: module.id,
    selector: 'dodaj-artikel',
    templateUrl: 'artikel-dodaj.component.html'
})
export class ArtikelDodajComponent {

    artikel: Artikel = new Artikel;
    seznamId: number;
    govorilnaUra: GovorilnaUra;
    private sub: any;

    constructor(private seznamiService: SeznamiService,
                private router: Router,
                private route: ActivatedRoute) {
    }

    ngOnInit() {
        this.sub = this.route.params.subscribe(params => {
           this.seznamId = +params['id'];
        });
      }

      ngOnDestroy() {
        this.sub.unsubscribe();
      }

    submitForm(): void {
        this.seznamiService.create(this.govorilnaUra)
            .subscribe(() => this.router.navigate(['/govorilne-ure/' + this.govorilnaUra.id]));
    }

    nazaj(): void {
        this.router.navigate(['/govorilne-ure']);
    }

}
