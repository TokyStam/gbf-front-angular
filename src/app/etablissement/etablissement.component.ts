import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthenticationService } from '../shared/authentication';
import { Router } from '@angular/router';
import { EtablissementService } from '../services/etablissement.service';

@Component({
  selector: 'app-etablissement',
  templateUrl: './etablissement.component.html',
  styleUrls: ['./etablissement.component.css']
})
export class EtablissementComponent implements OnInit {
  etablissements = [];
  myDate = new Date();
  constructor(private etablissementService: EtablissementService) { }

  ngOnInit() {
    this.getEtablissements();
  }

  public getEtablissements() {
    this.etablissementService.fetchAll({include: ['programme']}).subscribe((data) => {
      this.etablissements = data;
    });
  }


}
