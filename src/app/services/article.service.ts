import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ArticleModel } from '../models/article-model';
import { CompteModel } from '../models/compte-model';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor(private http: HttpClient) { }

    //create
 public createCompte(id, data: CompteModel) {
  return this.http.post('/articles/'+ id + '/comptes', data);
}
  public create(data: ArticleModel) {
    return this.http.post('/articles', data);
  }

  public get(id: any, filter = {}) {
    return this.http.get('/articles/' + id + '?filter=' + JSON.stringify(filter));
  }

  public update(id: any, data: any) {
    return this.http.patch('/articles/' + id, data);
  }

  public delete(id: any) {
    return this.http.delete('/articles/' + id);
  }

  public fetchAll(filter = {}) {
    return this.http.get<any>('/articles?filter=' + encodeURI(JSON.stringify(filter)));
  }

  public exist(id) {
    this.http.get<any>('/articles/' + id + '/exists');
  }

}
