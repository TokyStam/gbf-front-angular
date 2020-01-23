import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BudgetComponent } from '../budget.component';

@Component({
  selector: 'app-budget-liste',
  templateUrl: './budget-liste.component.html',
  styleUrls: ['./budget-liste.component.css']
})
export class BudgetListeComponent implements OnInit {
  myDate = new Date();
  etablissement_id;
  budgets = [
    {"id": 1, "date": "2017"},
    {"id": 2, "date": "2018"},
    {"id": 3, "date": "2019"},
  ]
  constructor(public route: ActivatedRoute,
              private budgetComponent: BudgetComponent) { }

  ngOnInit() {
      this.etablissement_id = this.budgetComponent.etablissement_id;
  }

}
