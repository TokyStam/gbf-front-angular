import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-liste-budget',
  templateUrl: './liste-budget.component.html',
  styleUrls: ['./liste-budget.component.css']
})
export class ListeBudgetComponent implements OnInit {

  budgets = [
    {"id": 1, "date": "2017"},
    {"id": 2, "date": "2018"},
    {"id": 3, "date": "2019"},
  ];

  constructor() { }

  ngOnInit() {
  }

}
