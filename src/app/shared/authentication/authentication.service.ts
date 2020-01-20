import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TokenStorageService } from './token-storage.service';
import { tap, map } from 'rxjs/operators';
import { Observable } from 'rxjs';

interface userData {
  email: string;
  password: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http: HttpClient, private tokenStorageService: TokenStorageService) { }
  public login(credentials: userData) {
    return this.http.post('/utilisateurs/login', credentials).pipe(tap(data => {
      this.tokenStorageService.initializeCredentials(data);
    }));
  }

  /**
   * logout
   * @return observable
   */
  public logout() {
    return new Observable((subscirber) => {
      this.tokenStorageService.clear();
      subscirber.next();
      subscirber.complete();
    });
  }

  /**
   * isAuthorized
   * verify if the user is authorized
   * @return observable <boolean>
   */
  public isAuthorized(): Observable<boolean> {
    return this.tokenStorageService.getAccesToken().pipe(
      map((token) => {
        return !!token;
      })
    );
  }

  /**
   * getAccessToken
   * ge the user acces token
   * @return observable<string>
   */
    public getAccessToken(): Observable<string> {
      return this.tokenStorageService.getAccesToken();
    }

    /**
     * getUserId
     * get the current user id
     * @return observable <string>
     */
    public getUserId(): Observable<string> {
      return this.tokenStorageService.getUserId();
    }
}
