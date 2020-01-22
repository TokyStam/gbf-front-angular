import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-liste-fct',
  templateUrl: './liste-fct.component.html',
  styleUrls: ['./liste-fct.component.css']
})
export class ListeFctComponent implements OnInit {
  budgets = [
    {"id": 1, "date": "2017"},
    {"id": 2, "date": "2018"},
    {"id": 3, "date": "2019"},
  ]
  constructor() { }

  ngOnInit() {
  }

}
