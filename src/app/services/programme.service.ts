import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProgrammeModel } from '../models/programme-model';
import { EtablissementModel } from '../models/etablissement-model';

@Injectable({
  providedIn: 'root'
})
export class ProgrammeService {

  constructor(private http: HttpClient) { }

   // filtre personnaliser 
   public getBudgetByProg(){
    const filter = {
            include: {
              relation: "etablissements",
              scope: {
                include:{
                  relation: "budgets"
                }
          }
        }
      }
      return filter;
  }

     // filtre personnaliser 
     public filterPorgamme(etablissemenentId){
      const filter = {
              include: {
                relation: "etablissements",
                scope: {
                  where:{
                    id: etablissemenentId
                  }
            }
          }
        }
        return filter;
    }

  public create(data: ProgrammeModel) {
    return this.http.post('/programmes', data);
  }

  public get(id: any, filter = {}) {
    return this.http.get('/programmes/' + id + '?filter=' + JSON.stringify(filter));
  }

  public update(id: any, data: any) {
    return this.http.patch('/programmes/' + id, data);
  }

  public delete(id: any) {
    return this.http.delete('/programmes/' + id);
  }

  public fetchAll(filter = {}) {
    return this.http.get<any>('/programmes?filter=' + encodeURI(JSON.stringify(filter)));
  }

  public exist(id) {
    this.http.get<any>('/programmes/' + id + '/exists');
  }

  /**
   * newEtablissement
   * create an etablissement for this programme
   * @param id string
   * @param etablissement Etablissement
   * @return Observable
   */
  public newEtablissement(id, etablissement: EtablissementModel) {
    return this.http.post('/programmes/' + id + '/etablissements', etablissement);
  }
}
