import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-compte',
  templateUrl: './compte.component.html',
  styleUrls: ['./compte.component.css']
})
export class CompteComponent implements OnInit {
  compte = [
    {"id": 6217,"nom": "Maintenance des réseaux, logiciels et systèmes informatiques"},
    {"id": 6263, "nom": "Redevances téléphoniques mobiles "},
  ]
  constructor() { }

  ngOnInit() {
  }

}
