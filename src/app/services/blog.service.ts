import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { map } from 'rxjs/operators'; 
import { BlogEntry } from '../models/blog.model';

@Injectable({
  providedIn: 'root',
})
export class BlogService {
  private apiUrl = 'https://demo.dotcms.com/api/content/render/false/query/+contentType:blog';

  constructor(private http: HttpClient) {  }

  getBlogEntries(): Observable<BlogEntry[]> {
    return this.http.get<{ contentlets: BlogEntry[] }>(this.apiUrl).pipe(
      map(response => response.contentlets) 
    );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Server returned code ${error.status}, ` +
        `body was: ${error.error}`
      );
    }
    return throwError(() => new Error('Something went wrong; please try again later.'));
  }
}
