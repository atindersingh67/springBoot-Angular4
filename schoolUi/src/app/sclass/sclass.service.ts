import { Sclass } from './sclass';
import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {catchError, map, tap} from 'rxjs/operators';
import {of} from 'rxjs/observable/of';
import {API_URL} from '../common/constant'
const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};
@Injectable()
export class SclassService {
  private heroesUrl = API_URL+'schoolClass';
  constructor(private http: HttpClient
  ) {}



  getSclasses(): Observable<Sclass[]> {
    return this.http.get<Sclass[]>(this.heroesUrl).pipe(
      catchError(this.handleError('getSclasses', []))
    );

  }

  private log(message: string) {
    console.log(message);
  }

  saveSclasses(Sclass: Sclass): Observable<Sclass> {
//    try {
//      return this.http.post<Sclass>(this.heroesUrl, Sclass).pipe(catchError(this.handleError<Sclass>('addHero')));
//    } catch (E) {
//      alert(E);
//    }

         return this.http.post<Sclass>(this.heroesUrl, Sclass, httpOptions).pipe(
          tap((hero: Sclass) => this.log(`added hero w/ id=${Sclass.name}`)),
          catchError(this.handleError<Sclass>('addHero'))
        );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    //alert("int rror");
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

}
