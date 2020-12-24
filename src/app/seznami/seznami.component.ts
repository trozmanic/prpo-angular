import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';


import { SeznamiService } from './services/seznami.service';

import { GovorilnaUra} from "./models/govorilnaura";

@Component({
    moduleId: module.id,
    selector: 'vsi-seznami',
    templateUrl: 'seznami.component.html'
})
export class SeznamiComponent implements OnInit {
    seznami: GovorilnaUra[];
    seznam: GovorilnaUra;

    constructor(private seznamiService: SeznamiService,
                private router: Router) {
    }

    ngOnInit(): void {
        this.getSeznami();
    }

    getSeznami(): void {
        this.seznamiService
            .getGovorilneUre()
            .subscribe(seznami => this.seznami = seznami);
    }

    naPodrobnosti(seznam: GovorilnaUra): void {
        this.seznam = seznam;
        this.router.navigate(['/seznami', this.seznam.id]);
    }

    delete(seznam: GovorilnaUra): void {
        this.seznamiService
            .delete(seznam.id)
            .subscribe(seznamId => this.seznami = this.seznami.filter(s => s.id !== seznamId));
    }

}
