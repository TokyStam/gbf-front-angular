import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';
import { AuthenticationService } from 'src/app/shared/authentication';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

  constructor(private authenticationService: AuthenticationService, private router: Router) { }

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    // get the accestooken
    let token;
    this.authenticationService.getAccessToken().subscribe((data) => {
      token = data;
    });
    if (token) {
      // clone the request and add token to header
      const authReq = req.clone({
        headers: req.headers.set('Authorization', token)
      });
      return next.handle(authReq).pipe(
        tap((event) => {}, (error) => {
          if (error.status === 401) {
            this.authenticationService.logout().subscribe((data) => {
              this.router.navigate(['/login']);
            });
          }
        })
      );
    } else {
      return next.handle(req);
    }
  }
}
