import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ChapitreModel } from '../models/chapitre-model';

@Injectable({
  providedIn: 'root'
})
export class ChapitreService {

  constructor(private http: HttpClient) { }

  public create(data: ChapitreModel) {
    return this.http.post('/chapitres', data);
  }

  public get(id: any, filter = {}) {
    return this.http.get('/chapitres/' + id + '?filter=' + JSON.stringify(filter));
  }

  public update(id: any, data: any) {
    return this.http.patch('/chapitres/' + id, data);
  }

  public delete(id: any) {
    return this.http.delete('/chapitres/' + id);
  }

  public fetchAll(filter = {}) {
    return this.http.get<any>('/chapitres?filter=' + encodeURI(JSON.stringify(filter)));
  }

  public exist(id) {
    this.http.get<any>('/chapitres/' + id + '/exists');
  }
}
