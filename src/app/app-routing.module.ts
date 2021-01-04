import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {SeznamiComponent} from './seznami/seznami.component';
import {SeznamPodrobnostiComponent} from './seznami/seznam-podrobnosti.component';
import { ArtikelDodajComponent } from './seznami/artikel-dodaj.component';
import { SeznamStudentovComponent } from './seznami/seznam-studentov.component';
import { StudentPodrobnostiComponent } from './seznami/student-podrobnosti.component';

const routes: Routes = [
    {path: '', redirectTo: '/govorilne-ure', pathMatch: 'full'},
    {path: 'govorilne-ure', component: SeznamiComponent},
    {path: 'govorilne-ure/:id', component: SeznamPodrobnostiComponent},
    {path: 'dodaj', component: ArtikelDodajComponent},
    {path: 'studenti', component: SeznamStudentovComponent},
    {path: 'studenti/:id', component: StudentPodrobnostiComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
