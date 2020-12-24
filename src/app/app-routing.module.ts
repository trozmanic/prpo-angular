import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {SeznamiComponent} from './seznami/seznami.component';
import {SeznamPodrobnostiComponent} from './seznami/seznam-podrobnosti.component';
import { ArtikelDodajComponent } from './seznami/artikel-dodaj.component';

const routes: Routes = [
    {path: '', redirectTo: '/govorilne-ure', pathMatch: 'full'},
    {path: 'govorilne-ure', component: SeznamiComponent},
    {path: 'govorilne-ure/:id', component: SeznamPodrobnostiComponent},
    {path: 'govorilne-ure/:id/dodaj', component: ArtikelDodajComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
