import {Teacher} from './teacher';
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
export class TeacherService {
  private heroesUrl = API_URL+'teacher';
  constructor(private http: HttpClient
  ) {}



  getTeachers(): Observable<Teacher[]> {
    return this.http.get<Teacher[]>(this.heroesUrl).pipe(
      catchError(this.handleError('getTeachers', []))
    );

  }

  private log(message: string) {
    console.log(message);
  }

  saveTeachers(teacher: Teacher): Observable<Teacher> {

    return this.http.post<Teacher>(this.heroesUrl, teacher, httpOptions).pipe(
      tap((hero: Teacher) => this.log(`added hero w/ id=${teacher.name}`)),
      catchError(this.handleError<Teacher>('addHero'))
    );
  }


  updateTeacher(teacher: Teacher): Observable<Teacher> {

    return this.http.put<Teacher>(this.heroesUrl, teacher, httpOptions).pipe(
      tap((hero: Teacher) => this.log(`added hero w/ id=${teacher.name}`)),
      catchError(this.handleError<Teacher>('addHero'))
    );
  }

  deleteTeacher(id): Observable<Teacher> {

    return this.http.delete<Teacher>(this.heroesUrl+"/"+id, httpOptions).pipe(
      tap((hero: Teacher) => this.log(`deleted teacher`)),
      catchError(this.handleError<Teacher>('delted teacher'))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
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
