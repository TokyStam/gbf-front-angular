import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-liste-administration',
  templateUrl: './liste-administration.component.html',
  styleUrls: ['./liste-administration.component.css']
})
export class ListeAdministrationComponent implements OnInit {

  budgets = [
    {"id": 1, "nom": "BACC", "annee": "2020"},
    {"id": 2, "nom": "SGPM", "annee": "2020"},
  ];

  constructor() { }

  ngOnInit() {
    
  }
}
