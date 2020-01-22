import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SectionModel } from '../models/section-model';
import { ArticleModel } from '../models/article-model';

@Injectable({
  providedIn: 'root'
})
export class SectionService {

  constructor(private http: HttpClient) { }

     //create
  public createArticle(id, data: ArticleModel) {
    return this.http.post('/sections/'+ id + '/articles', data);
  }
  public create(data: SectionModel) {
    return this.http.post('/sections', data);
  }

  public get(id: any, filter = {}) {
    return this.http.get('/sections/' + id + '?filter=' + JSON.stringify(filter));
  }

  public update(id: any, data: any) {
    return this.http.patch('/sections/' + id, data);
  }

  public delete(id: any) {
    return this.http.delete('/sections/' + id);
  }

  public fetchAll(filter = {}) {
    return this.http.get<any>('/sections?filter=' + encodeURI(JSON.stringify(filter)));
  }

  public exist(id) {
    this.http.get<any>('/sections/' + id + '/exists');
  }
}
