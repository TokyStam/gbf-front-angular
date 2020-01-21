import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-liste-recette',
  templateUrl: './liste-recette.component.html',
  styleUrls: ['./liste-recette.component.css']
})
export class ListeRecetteComponent implements OnInit {

  
  budgets = [
    {"id": 1, "date": "2017"},
    {"id": 2, "date": "2018"},
    {"id": 3, "date": "2019"},
  ]
  constructor() { }

  ngOnInit() {
  }

}
