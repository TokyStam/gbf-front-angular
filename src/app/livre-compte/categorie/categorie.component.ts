import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categorie',
  templateUrl: './categorie.component.html',
  styleUrls: ['./categorie.component.css']
})
export class CategorieComponent implements OnInit {
  categorie = [
    {"id": 1,"nom": "Fonctionnement"},
    {"id": 2,"nom": "Investissement"}
  ]
  constructor() { }

  ngOnInit() {
  }

}
