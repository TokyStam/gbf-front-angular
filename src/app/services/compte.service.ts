import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CompteModel } from '../models/compte-model';

@Injectable({
  providedIn: 'root'
})
export class CompteService {

  constructor(private http: HttpClient) { }

  public create(data: CompteModel) {
    return this.http.post('/comptes', data);
  }

  public get(id: any, filter = {}) {
    return this.http.get('/comptes/' + id + '?filter=' + JSON.stringify(filter));
  }

  public update(id: any, data: any) {
    return this.http.patch('/comptes/' + id, data);
  }

  public delete(id: any) {
    return this.http.delete('/comptes/' + id);
  }

  public fetchAll(filter = {}) {
    return this.http.get<any>('/comptes?filter=' + encodeURI(JSON.stringify(filter)));
  }

  public exist(id) {
    this.http.get<any>('/comptes/' + id + '/exists');
  }
}
