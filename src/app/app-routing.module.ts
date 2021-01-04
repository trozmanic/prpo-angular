import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {SeznamiComponent} from './seznami/seznami.component';
import {SeznamPodrobnostiComponent} from './seznami/seznam-podrobnosti.component';
import { ArtikelDodajComponent } from './seznami/artikel-dodaj.component';
import {ProfesorComponent} from './seznami/profesor.component';
import {SeznamProfesorjevComponent} from './seznami/seznam-profesorjev.component';
import {CreateProfesorComponent} from './seznami/create-profesor.component';
import { SeznamStudentovComponent } from './seznami/seznam-studentov.component';
import { StudentPodrobnostiComponent } from './seznami/student-podrobnosti.component';
import { CreateStudentComponent } from './seznami/create-student.component';

const routes: Routes = [
    {path: '', redirectTo: '/govorilne-ure', pathMatch: 'full'},
    {path: 'govorilne-ure', component: SeznamiComponent},
    {path: 'govorilne-ure/:id', component: SeznamPodrobnostiComponent},
    {path: 'dodaj', component: ArtikelDodajComponent},
    {path: 'profesorji/:id', component: ProfesorComponent},
    {path: 'profesorji', component: SeznamProfesorjevComponent},
    {path: 'profesorji-create', component: CreateProfesorComponent},
    {path: 'dodaj', component: ArtikelDodajComponent},
    {path: 'studenti', component: SeznamStudentovComponent},
    {path: 'studenti/:id', component: StudentPodrobnostiComponent},
    {path: 'student-create', component: CreateStudentComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
