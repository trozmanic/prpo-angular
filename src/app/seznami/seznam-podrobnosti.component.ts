import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {Location} from '@angular/common';

import { switchMap } from 'rxjs/operators';

import { GovorilnaUra} from './models/govorilnaura';
import {SeznamiService} from './services/seznami.service';
import {PrijavaOdjavaDto} from './models/prijavaodjavadto';

@Component({
    moduleId: module.id,
    selector: 'seznam-podrobnosti',
    templateUrl: 'seznam-podrobnosti.component.html'
})
export class SeznamPodrobnostiComponent implements OnInit {
    govorilnaUra: GovorilnaUra;

    constructor(private seznamService: SeznamiService,
                private route: ActivatedRoute,
                private location: Location,
                private router: Router) {
    }

    ngOnInit(): void {
       this.route.params.pipe(
            switchMap((params: Params) => this.seznamService.getGovorilnaUra(+params['id'])))
            .subscribe(seznam => this.govorilnaUra = seznam);
    }

    dodajArtikel(): void {
        this.router.navigate(['govorilne-ure/dodaj']);
    }

    nazaj(): void {
        this.router.navigate(['govorilne-ure']);
    }

    onPrijava(id): void {
        let prijava: PrijavaOdjavaDto = new PrijavaOdjavaDto()
        prijava.student_id = parseInt(String(id.student_id));
        prijava.govorilna_ura_id = this.govorilnaUra.id
        console.log(id);
    console.log(prijava);
        this.seznamService.prijavaNaTermin(prijava).subscribe( ura => console.log(ura));
    }
}
