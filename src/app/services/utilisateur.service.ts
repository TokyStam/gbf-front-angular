import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UtilisateurModel } from '../models/utilisateur-model';

@Injectable({
  providedIn: 'root'
})
export class UtilisateurService {

  constructor(private http: HttpClient) { }

  public create(data: UtilisateurModel) {
    return this.http.post('/utilisateurs', data);
  }

  public get(id: any, filter = {}) {
    return this.http.get('/utilisateurs/' + id + '?filter=' + JSON.stringify(filter));
  }

  public update(id: any, data: any) {
    return this.http.patch('/utilisateurs/' + id, data);
  }

  public delete(id: any) {
    return this.http.delete('/utilisateurs/' + id);
  }

  public fetchAll(filter = {}) {
    return this.http.get<any>('/utilisateurs?filter=' + encodeURI(JSON.stringify(filter)));
  }

  public exist(id) {
    return this.http.get<any>('/utilisateurs/' + id + '/exists');
  }

  public etablissement(id, filter = {}) {
    return this.http.get('/utilisateurs/' + id + '/etablissements?filter=' + encodeURI(JSON.stringify(filter)));
  }
}
