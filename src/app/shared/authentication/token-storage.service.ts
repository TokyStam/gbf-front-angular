import { Injectable } from '@angular/core';
import { Observable, observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {

  constructor() { }

  /**
   * initialize the credentials data
   */
  public initializeCredentials(credentials) {
    localStorage.setItem('credentials', JSON.stringify(credentials));
  }

  /**
   * initializeRoles()
   * initialize the user role
   * @param roles array
   */
  public initializeRoles(roles) {
    localStorage.setItem('roles', JSON.stringify(roles));
  }

  /**
   * clear all credentials
   */
  public clear() {
    localStorage.removeItem('credentials');
    localStorage.removeItem('roles');
  }

  /**
   * get accesToken
   * @return observable<string>
   */
  public getAccesToken(): Observable<string> {
    return new Observable((observer) => {
      const credentials = JSON.parse(localStorage.getItem('credentials'));
      try {
        const accesToken = credentials.id;
        if (!accesToken) {
          throw (new Error('token not found'));
        }
        observer.next(accesToken);
      } catch (error) {
        observer.next(null);
      }
      observer.complete();
    });
  }

  public getRoles(): Observable<string> {
    return new Observable((observer) => {
      const roles = JSON.parse(localStorage.getItem('roles'));
      observer.next(roles);
      observer.complete();
    });
  }

  /**
   * getUserId
   * get the user id to local storage
   * @return observable<string>
   */
  public getUserId(): Observable<string> {
    return new Observable((observer) => {
      const credentials = JSON.parse(localStorage.getItem('credentials'));
      try {
        const userId = credentials.userId;
        if (!userId) {
          throw(new Error('userId not found'));
        }
        observer.next(userId);
      } catch (error) {
        observer.error(error);
      }
      observer.complete();
    });
  }
}
