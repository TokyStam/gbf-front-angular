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
    return this.http.post('/utilisateurs/login', credentials).pipe(tap((data: any) => {
      this.tokenStorageService.initializeCredentials(data);
      this.getUser(data.userId).subscribe((user: any) => {
        this.tokenStorageService.initializeRoles(user.roles);
      });
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

  public IsAdmin(): Observable<boolean> {
    return this.tokenStorageService.getRoles().pipe(
      map((roles: any) => {
        let returnValue = false;
        roles.forEach(element => {
          if (element.name === 'admin') {
            returnValue = true;
          }
        });
        return returnValue;
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

    /**
     * getUser()
     * get user detail
     * @param userId string
     * @return Observable <any>
     */
    public getUser(userId) {
      return this.http.get('/utilisateurs/' + userId);
    }
}
