import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-liste-depense',
  templateUrl: './liste-depense.component.html',
  styleUrls: ['./liste-depense.component.css']
})
export class ListeDepenseComponent implements OnInit {
  budgets = [
    {"id": 1, "date": "2017"},
    {"id": 2, "date": "2018"},
    {"id": 3, "date": "2019"},
  ]
  constructor() { }

  ngOnInit() {
  }

}
