import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { map, switchMap } from 'rxjs/operators'; 
import { NavigationItem } from '../models/nav.model';

@Injectable({
  providedIn: 'root',
})

export class NavigationService {
  private apiUrl = 'https://demo.dotcms.com/api/v1/nav/?depth=3&languageId=1';
  private tokenUrl = 'https://demo.dotcms.com/api/v1/authentication/api-token';
  private jwtToken: string | null = null;
  private username = 'admin@dotcms.com';
  private password = 'admin';

  constructor(private http: HttpClient) {}

  private getJwtToken(): Observable<string> {
    const credentials = {
      user: this.username,
      password: this.password,
      expirationDays: 10,
    };
  
    return this.http.post<any>(this.tokenUrl, credentials, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    }).pipe(
      map((response) => {
        const token = response?.entity?.token;
        if (token) {
          this.jwtToken = token; 
          return token;
        }
        throw new Error('Token not found in the response');
      }),
      catchError((error) => {
        console.error('Error fetching JWT token:', error);
        return throwError(() => new Error('Failed to fetch JWT token.'));
      })
    ) as Observable<string>;
  }

getNavEntries(): Observable<NavigationItem[]> {
  if (!this.jwtToken) {
    return this.getJwtToken().pipe(
      switchMap((token) => {
        this.jwtToken = token; 
        return this.fetchNavEntries(); 
      })
    );
  } else {
    return this.fetchNavEntries();
  }
}

private fetchNavEntries(): Observable<NavigationItem[]> {
  return this.http.get<{ entity: NavigationItem; errors: any[]; i18nMessagesMap: any; messages: any[]; pagination: any; permissions: any[] }>(this.apiUrl, {
    headers: new HttpHeaders({
      'Authorization': `Bearer ${this.jwtToken}` 
    }),
  }).pipe(
    map((response) => {
      return [response.entity];
    }),
    catchError((error) => {
      console.error('Error fetching navigation entries:', error);
      return this.handleError(error);
    })
  );
}

  private handleError(error: HttpErrorResponse): Observable<never> {
    let errorMessage: string;
    if (error.error instanceof ErrorEvent) {
      errorMessage = `An error occurred: ${error.error.message}`;
    } else {
      errorMessage = `Server returned code ${error.status}, body was: ${JSON.stringify(error.error)}`;
    }
    console.error(errorMessage);
    return throwError(() => new Error(errorMessage));
  }
}