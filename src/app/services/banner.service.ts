import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map } from 'rxjs/operators'; 
import { BannerList } from '../models/banner.model';

@Injectable({
  providedIn: 'root',
})
export class BannerService {
  private apiUrl = 'https://demo.dotcms.com/api/content/render/false/query/+contentType:banner';

  constructor(private http: HttpClient) {  }

  getBanners(): Observable<BannerList[]> {
    return this.http.get<{ contentlets: BannerList[] }>(this.apiUrl).pipe(
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
