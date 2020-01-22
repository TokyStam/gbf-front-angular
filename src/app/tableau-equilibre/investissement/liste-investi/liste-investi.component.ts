import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-liste-investi',
  templateUrl: './liste-investi.component.html',
  styleUrls: ['./liste-investi.component.css']
})
export class ListeInvestiComponent implements OnInit {
  budgets = [
    {"id": 1, "date": "2017"},
    {"id": 2, "date": "2018"},
    {"id": 3, "date": "2019"},
  ]
  constructor() { }

  ngOnInit() {
  }

}
