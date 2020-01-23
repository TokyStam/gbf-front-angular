import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ChapitreModel } from '../models/chapitre-model';
import { SectionModel } from '../models/section-model';
@Injectable({
  providedIn: 'root'
})
export class ChapitreService {

  constructor(private http: HttpClient) { }

  // filtre personnaliser 
  public filterCompte(num, numEtablissemetn){
    const filter = {
            include: {
              relation: "sections",
              scope: {
              include:{
              relation:"articles",
                scope:{
                  include:{
                    relation:"comptes",
                    scope:{
                      include: {
                        relation: "budgets",
                        scope:{
                          where: {
                            // and: [
                             etablissementId: numEtablissemetn 
                            // {date: {gt: new Date('2020-01-01T00:00:00.000Z')}},
                            // {date: {lt: new Date('2020-12-31T00:00:00.000Z')}}
                          // ]
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        },
        where:{
          numChap: num
        }
      }
      return filter;
  }
   //create
 public createSection(id, data: SectionModel) {
  return this.http.post('/chapitres/'+ id + '/sections', data);
}
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
