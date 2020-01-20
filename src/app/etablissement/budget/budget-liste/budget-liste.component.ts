import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-budget-liste',
  templateUrl: './budget-liste.component.html',
  styleUrls: ['./budget-liste.component.css']
})
export class BudgetListeComponent implements OnInit {

  budgets = [
    {"id": 1, "date": "2017"},
    {"id": 2, "date": "2018"},
    {"id": 3, "date": "2019"},
  ]
  constructor() { }

  ngOnInit() {
  }

}
