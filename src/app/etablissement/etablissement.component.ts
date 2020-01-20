import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthenticationService } from '../shared/authentication';
import { Router } from '@angular/router';

@Component({
  selector: 'app-etablissement',
  templateUrl: './etablissement.component.html',
  styleUrls: ['./etablissement.component.css']
})
export class EtablissementComponent implements OnInit {
  etablissements = [
    {"id": 1,"nom": "ENI", "type": "Etablissement", "date": "April 18, 2017"},
    {"id": 2,"nom": "Office du BACC", "type": "Administration", "date": "April 18, 2017"},
    {"id": 3,"nom": "EMIT", "type": "Etablissement", "date": "April 18, 2017"}
  ]
  myDate = new Date();
  constructor() { }

  ngOnInit() {
  }


}
