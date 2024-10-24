import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    if (localStorage.getItem('token')) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });

      return next.handle(request).pipe(
        catchError((error: any) => {
          if (error.status === 401 && error.statusText == 'Unauthorized') {
            localStorage.clear();
            window.location.reload();
          }
          return throwError(() => error);
        })
      );
    }

    return next.handle(request);
  }
}