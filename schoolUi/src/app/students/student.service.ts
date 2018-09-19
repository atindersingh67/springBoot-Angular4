import {Student} from './student';
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
export class StudentService {
  private heroesUrl = API_URL+'student';
  constructor(private http: HttpClient
  ) {}



  getStudents(): Observable<Student[]> {
    return this.http.get<Student[]>(this.heroesUrl).pipe(
      catchError(this.handleError('getStudents', []))
    );

  }

  private log(message: string) {
    console.log(message);
  }

  saveStudents(student: Student): Observable<Student> {


         return this.http.post<Student>(this.heroesUrl, student, httpOptions).pipe(
          tap((hero: Student) => this.log(`added hero w/ id=${Student.name}`)),
          catchError(this.handleError<Student>('addHero'))
        );
  }




deleteStudent(id): Observable<Student> {

  return this.http.delete<Student>(this.heroesUrl+"/"+id, httpOptions).pipe(
    tap((hero: Student) => this.log(`deleted student`)),
    catchError(this.handleError<Student>('deleted student'))
  );
}
  

  updateStudent(student: Student): Observable<Student> {


    return this.http.put<Student>(this.heroesUrl, student, httpOptions).pipe(
     tap((hero: Student) => this.log(`added hero w/ id=${Student.name}`)),
     catchError(this.handleError<Student>('addHero'))
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
