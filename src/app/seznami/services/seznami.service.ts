import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import { NakupovalniSeznam } from '../models/seznam';
import { Observable } from 'rxjs';


import { GovorilnaUraDto} from '../models/govorilnauradto';
import {GovorilnaUra} from '../models/govorilnaura';
import {Profesor} from '../models/profesor';
import {Student} from '../models/student';
import {PrijavaOdjavaDto} from '../models/prijavaodjavadto';


import { catchError } from 'rxjs/operators';
import { Artikel } from '../models/artikel';

@Injectable()
export class SeznamiService {

    private headers = new HttpHeaders({'Content-Type': 'application/json'});
    private url = 'http://localhost:8080/v1/govorilne-ure';
    private urlProf = 'http://localhost:8080/v1/profesorji';
    private  urlStud = 'http://localhost:8080/v1/studenti';

    constructor(private http: HttpClient) {
    }

    getGovorilneUre(): Observable<GovorilnaUra[]> {
        return this.http.get<GovorilnaUra[]>(this.url)
                        .pipe(catchError(this.handleError));
    }

    getGovorilnaUra(id: number): Observable<GovorilnaUra> {
        const url = `${this.url}/${id}`;
        return this.http.get<GovorilnaUra>(url)
                        .pipe(catchError(this.handleError));
    }

    delete(id: number): Observable<number> {
        const url = `${this.url}/${id}`;
        return this.http.delete<number>(url, {headers: this.headers})
                        .pipe(catchError(this.handleError));
    }

    create( govorilnaUra: GovorilnaUraDto): Observable<GovorilnaUra> {
        return this.http.post<GovorilnaUra>(this.urlProf + '/' + govorilnaUra.profesor_id + '/dodaj-govorilno-uro' , JSON.stringify(govorilnaUra), {headers: this.headers})
                        .pipe(catchError(this.handleError));
    }


    private handleError(error: any): Promise<any> {
        console.error('Prišlo je do napake', error);
        return Promise.reject(error.message || error);
    }

    prijavaNaTermin(prijava: PrijavaOdjavaDto): Observable<GovorilnaUra> {
        return this.http.post<GovorilnaUra>(this.urlStud + '/' + prijava.student_id.valueOf() + '/prijava-na-termin', JSON.stringify(prijava), {headers: this.headers})
            .pipe(catchError(this.handleError));
    }

    pridobiStudente() {
        return this.http.get<Student[]>(this.urlStud)
            .pipe(catchError(this.handleError));
    }
    pridobiStudenta(id) {
        return this.http.get<Student>(this.urlStud + '/' + id)
            .pipe(catchError(this.handleError));
    }
    brisiStudenta(id) {
        return this.http.delete<number>(this.urlStud + '/' + id, {headers: this.headers})
            .pipe(catchError(this.handleError));
    }
    odjavaStudenta(odjava: PrijavaOdjavaDto) {
        return this.http.post<GovorilnaUra>(this.urlStud + '/' + odjava.student_id.valueOf() + '/odjava-od-termina', JSON.stringify(odjava), {headers: this.headers})
            .pipe(catchError(this.handleError));
    }
}

