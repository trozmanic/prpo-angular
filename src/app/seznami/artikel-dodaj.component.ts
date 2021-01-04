import {Component} from '@angular/core';
import {Router, Params, ActivatedRoute} from '@angular/router';

import {SeznamiService} from './services/seznami.service';
import { Artikel } from './models/artikel';
import { switchMap } from 'rxjs/operators';
import {GovorilnaUra} from './models/govorilnaura';
import {GovorilnaUraDto} from './models/govorilnauradto';

@Component({
    moduleId: module.id,
    selector: 'dodaj-artikel',
    templateUrl: 'artikel-dodaj.component.html'
})
export class ArtikelDodajComponent {

    govorilnaUra: GovorilnaUraDto = new GovorilnaUraDto();


    constructor(private seznamiService: SeznamiService,
                private router: Router) {
    }




    submitForm(): void {
        this.govorilnaUra.datum =  this.govorilnaUra.datum + 'T00:00:00.000000'
        this.seznamiService.create(this.govorilnaUra)
            .subscribe((govorilnaUra) => this.router.navigate(['/govorilne-ure/' + govorilnaUra.id]));
    }

    nazaj(): void {
        this.router.navigate(['/govorilne-ure']);
    }

}
