import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {SeznamiComponent} from './seznami/seznami.component';
import {SeznamPodrobnostiComponent} from './seznami/seznam-podrobnosti.component';
import { ArtikelDodajComponent } from './seznami/artikel-dodaj.component';
import {ProfesorComponent} from './seznami/profesor.component';
import {SeznamProfesorjevComponent} from './seznami/seznam-profesorjev.component';
import {CreateProfesorComponent} from './seznami/create-profesor.component';

const routes: Routes = [
    {path: '', redirectTo: '/govorilne-ure', pathMatch: 'full'},
    {path: 'govorilne-ure', component: SeznamiComponent},
    {path: 'govorilne-ure/:id', component: SeznamPodrobnostiComponent},
    {path: 'dodaj', component: ArtikelDodajComponent},
    {path: 'profesorji/:id', component: ProfesorComponent},
    {path: 'profesorji', component: SeznamProfesorjevComponent},
    {path: 'profesorji-create', component: CreateProfesorComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
