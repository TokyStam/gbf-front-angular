import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-annee028',
  templateUrl: './annee028.component.html',
  styleUrls: ['./annee028.component.css']
})
export class Annee028Component implements OnInit {
  budgets = [
    {"id": 1, "date": "2017"},
    {"id": 2, "date": "2018"},
    {"id": 3, "date": "2019"},
  ];

  constructor() { }

  ngOnInit() {
    
  }
}
