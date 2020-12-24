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

    create( govorilnaUra: GovorilnaUra): Observable<GovorilnaUra> {
        return this.http.post<Artikel>(this.url , JSON.stringify(govorilnaUra), {headers: this.headers})
                        .pipe(catchError(this.handleError));
    }

    private handleError(error: any): Promise<any> {
        console.error('Prišlo je do napake', error);
        return Promise.reject(error.message || error);
    }
}

