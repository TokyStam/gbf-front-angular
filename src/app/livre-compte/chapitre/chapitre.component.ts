import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chapitre',
  templateUrl: './chapitre.component.html',
  styleUrls: ['./chapitre.component.css']
})
export class ChapitreComponent implements OnInit {
  chapitre = [
    {"id": 6,"nom": "COMPTES DES CHARGES"},
    {"id": 2,"nom": "COMPTES D'IMMOBILISATIONS"}
  ]
  constructor() { }

  ngOnInit() {
  }

}
