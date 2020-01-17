import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable, from } from 'rxjs';

import { environment } from './../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BaseUrlInterceptorService implements HttpInterceptor {

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler):
    Observable<HttpEvent<any>> {
      const modifiedRequest = req.clone({
        url: `${environment.apiUrl}${req.url}`
      });
    return next.handle(modifiedRequest);
  }
}
