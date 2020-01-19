import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-annee310',
  templateUrl: './annee310.component.html',
  styleUrls: ['./annee310.component.css']
})
export class Annee310Component implements OnInit {
  budgets = [
    {"id": 1, "date": "2017"},
    {"id": 2, "date": "2018"},
    {"id": 3, "date": "2019"},
  ];

  constructor() { }

  ngOnInit() {
    
  }

}
