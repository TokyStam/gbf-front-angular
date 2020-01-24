import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthenticationService } from '../shared/authentication';
import { Router, ActivatedRoute } from '@angular/router';
import { EtablissementService } from '../services/etablissement.service';
import { UtilisateurService } from '../services/utilisateur.service';

@Component({
  selector: 'app-etablissement',
  templateUrl: './etablissement.component.html',
  styleUrls: ['./etablissement.component.css']
})
export class EtablissementComponent implements OnInit {
  etablissements = [];
  myDate = new Date();
  constructor(private etablissementService: EtablissementService, public authenticationService: AuthenticationService,
              private utilisateurService: UtilisateurService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getEtablissements();
  }

  public getEtablissements() {
    // verify if the user is an administrator
    this.authenticationService.IsAdmin().subscribe((isAdmin) => {
      // get all etablissement list
      if (isAdmin) {
        this.etablissementService.fetchAll({ include: ['programme'] }).subscribe((data) => {
          this.etablissements = data;
        });
      } else { // get the current user etablissement
        this.authenticationService.getUserId().subscribe((userId) => {
          this.utilisateurService.etablissement(userId, { include: ['programme'] }).subscribe((data: any) => {
            this.etablissements = data;
          });
        });
      }
    });
  }


}
