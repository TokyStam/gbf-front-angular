import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EtablissementModel } from '../models/etablissement-model';

@Injectable({
  providedIn: 'root'
})
export class EtablissementService {

  constructor(private http: HttpClient) { }

  public create(data: EtablissementModel) {
    return this.http.post('/etablissements', data);
  }

  public get(id: any, filter = {}) {
    return this.http.get('/etablissements/' + id + '?filter=' + JSON.stringify(filter));
  }

  public update(id: any, data: any) {
    return this.http.patch('/etablissements/' + id, data);
  }

  public delete(id: any) {
    return this.http.delete('/etablissements/' + id);
  }

  public fetchAll(filter = {}) {
    return this.http.get<any>('/etablissements?filter=' + encodeURI(JSON.stringify(filter)));
  }

  public exist(id) {
    this.http.get<any>('/etablissements/' + id + '/exists');
  }
}
