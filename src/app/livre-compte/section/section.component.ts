import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.css']
})
export class SectionComponent implements OnInit {
  section = [
    {"id": 60,"nom": "Charges de personnel"},
    {"id": 61, "nom": "Achat de biens"},
    {"id": 65,"nom": "Achats de services et charges permanentes"},
    {"id": 66,"nom": "Transferts et Subventions"}
  ]
  constructor() { }

  ngOnInit() {
  }

}
