import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SectionModel } from '../models/section-model';
import { ArticleModel } from '../models/article-model';

@Injectable({
  providedIn: 'root'
})
export class SectionService {

  constructor(private http: HttpClient) { }

    // liste rdv a venir
    public fetchComtpeBySection(filter = {}, compte) {
      this.fetchAll(filter).subscribe((data: any) => {
        for (let a of data){
          for (let c  of a.articles){
            for(let k of c.comptes){
              compte.push(k);
            }
          }
        }
      }, (error) => {
      console.log(error);
      });
    }

  public filterCompte(numSection){
      const filter = {
          include:{
          relation:"articles",
            scope:{
              include:{
                relation:"comptes"
              }
            }
          },
          where:{
            numSec: numSection
          }
        }
        return filter;
    }

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
