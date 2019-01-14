import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MockDataServiceService {

  constructor(private httpClient: HttpClient) { }

  getData(): Observable<any> {
    // return mockData.groups;
    return this.httpClient.get('../../assets/mock-data.json').pipe(catchError(this.handleError));
  }

  handleError (error: HttpErrorResponse) {
    if (error instanceof ErrorEvent) {
      console.error('An error occurred:', error.message);
    } else {
      console.error(`Server error code: ${error.status}, ` +
        `body was: ${error.error}`);
    }

    return throwError(
      'Error occurred please try again later.'
    );
  }
}
