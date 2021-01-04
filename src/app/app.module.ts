import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';

import {AppRoutingModule} from './app-routing.module';

import {AppComponent} from './app.component';
import {SeznamiComponent} from './seznami/seznami.component';
import {ArtikelDodajComponent} from './seznami/artikel-dodaj.component';
import {SeznamPodrobnostiComponent} from './seznami/seznam-podrobnosti.component';
import {SeznamiService} from './seznami/services/seznami.service';
import { ProfesorComponent } from './seznami/profesor.component';
import { SeznamProfesorjevComponent } from './seznami/seznam-profesorjev.component';
import { CreateProfesorComponent } from './seznami/create-profesor.component';


@NgModule({
    imports: [
        BrowserModule,
        HttpClientModule,
        AppRoutingModule,
        FormsModule
    ],
    declarations: [
        AppComponent,
        SeznamiComponent,
        SeznamPodrobnostiComponent,
        ArtikelDodajComponent,
        ProfesorComponent,
        SeznamProfesorjevComponent,
        CreateProfesorComponent
    ],
    providers: [SeznamiService],
    bootstrap: [AppComponent]
})
export class AppModule {
}

