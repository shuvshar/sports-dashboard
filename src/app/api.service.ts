import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { MedalTally } from './medal-tally.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  medalTallyUrl = 'https://my-json-server.typicode.com/shuvshar/backend/teams';
  constructor(private http: HttpClient) { }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    // Return an observable with a user-facing error message.
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }

  getMedalTally() {
    return this.http.get<MedalTally[]>(this.medalTallyUrl);
  }

  updateMedalTally(medalTallyObj: MedalTally): Observable<MedalTally> {
    return this.http.put<MedalTally>(this.medalTallyUrl, medalTallyObj)
      .pipe(
        catchError(this.handleError)
      );
  }
}
