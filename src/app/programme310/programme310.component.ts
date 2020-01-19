import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-programme310',
  templateUrl: './programme310.component.html',
  styleUrls: ['./programme310.component.css']
})
export class Programme310Component implements OnInit {

  budgets = [
    {"id": 1, "nom": "ENI", "annee": "2020"},
    {"id": 2, "nom": "EMIT", "annee": "2020"},
    {"id": 3, "nom": "DEGS", "annee": "2020"},
  ];

  constructor() { }

  ngOnInit() {
    
  }
}
