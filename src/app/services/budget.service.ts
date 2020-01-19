import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BudgetModel } from '../models/budget-model';

@Injectable({
  providedIn: 'root'
})
export class BudgetService {

  constructor(private http: HttpClient) { }

  public create(data: BudgetModel) {
    return this.http.post('/budgets', data);
  }

  public get(id: any, filter = {}) {
    return this.http.get('/budgets/' + id + '?filter=' + JSON.stringify(filter));
  }

  public update(id: any, data: any) {
    return this.http.patch('/budgets/' + id, data);
  }

  public delete(id: any) {
    return this.http.delete('/budgets/' + id);
  }

  public fetchAll(filter = {}) {
    return this.http.get<any>('/budgets?filter=' + encodeURI(JSON.stringify(filter)));
  }

  public exist(id) {
    this.http.get<any>('/budgets/' + id + '/exists');
  }
}
