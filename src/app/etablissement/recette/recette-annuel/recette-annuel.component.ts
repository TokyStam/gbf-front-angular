import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { Router } from '@angular/router';
import { ChapitreService } from 'src/app/services/chapitre.service';

@Component({
  selector: 'app-recette-annuel',
  templateUrl: './recette-annuel.component.html',
  styleUrls: ['./recette-annuel.component.css'],
  providers: [DatePipe]
})
export class RecetteAnnuelComponent implements OnInit {

  tableFonctionnement = [];
  tableInvestissement = [];
  totalFct = 0;
  totalInvesti = 0;

  constructor(private datepipe: DatePipe,
              private router: Router,
              private chapitreService: ChapitreService) { }

  ngOnInit() {
    
    this.fetchAllChapitre(
      this.chapitreService.filterRecette(7),
      this.tableFonctionnement, 'fct',
      this.datepipe.transform(Date.now(), 'yyyy')
    );

    this.fetchAllChapitre(
      this.chapitreService.filterRecette(1),
      this.tableInvestissement, 'investi',
      this.datepipe.transform(Date.now(), 'yyyy')
    );
  }
  // private fetch chapitre
  public fetchAllChapitre(filter, table, category, yearsearch) {
    this.chapitreService.fetchAll(filter).subscribe(
      (data: any) => {  
        const temp = data;
      
        // chapitre
        for (let chapitre of temp) { 
          var valeur1 = 0;
          ////////////debut calcule hapitre//////////////
          for (let sections of chapitre.sections) {
            for (let articles of sections.articles) {
              for (let comptes of articles.comptes) {
                for (let recettes of comptes.recettes) {
                  const date1 = new Date(recettes.annee);
                  this.datepipe.transform(date1, 'yyyy')  === yearsearch ?
                  valeur1 += recettes.montant: '';
                 
                     
                };
              };
            };
            };
          category == 'fct'? this.totalFct = valeur1 : this.totalInvesti = valeur1;
            ////////////fin calcule chapitre///////////
          let chap = {
            numCompte: chapitre.numChap,
            intitule: chapitre.intitule,
            montant: valeur1,
            type: 'chapitre'
          };
           chap.montant > 0 ? table.push(chap): '';
            //  console.log('chapitre: ', chap, chap ,table);
          // Section
          for (let sections of chapitre.sections) {
            var valeur2 = 0;
            ////////////debut calcule hapitre//////////////
              for (let articles of sections.articles) {
                for (let comptes of articles.comptes) {
                  for (let recettes of comptes.recettes) {
                    const date1 = new Date(recettes.annee);
                    this.datepipe.transform(date1, 'yyyy')  === yearsearch ?
                    valeur2 += recettes.montant: '';
                  };
                };
              };
              ////////////fin calcule chapitre///////////
            let sec = {
              numCompte: sections.numSec,
              intitule: sections.intitule,
              montant: valeur2,
              type: 'section'
            };
            sec.montant > 0 ? table.push(sec):'';

            //Article
            for (let articles of sections.articles) {
              var valeur3 = 0;
              ////////////debut calcule hapitre//////////////
                  for (let comptes of articles.comptes) {
                    for (let recettes of comptes.recettes) {
                      const date1 = new Date(recettes.annee);
                      this.datepipe.transform(date1, 'yyyy')  === yearsearch ?
                      valeur3 += recettes.montant: '';
                    };
                  };
                ////////////fin calcule chapitre///////////
              let art = {
                numCompte: articles.numArt,
                intitule: articles.intitule,
                montant: valeur3,
                type: 'article'
              };
              art.montant > 0 ? table.push(art): '';

              // Compte
              for (let comptes of articles.comptes) {
                var valeur4 = 0;
                ////////////debut calcule hapitre//////////////
                      for (let recettes of comptes.recettes) {
                            const date1 = new Date(recettes.annee);
                            this.datepipe.transform(date1, 'yyyy')  === yearsearch ?
                            valeur4 += recettes.montant: '';
                           
                      };
                  ////////////fin calcule chapitre///////////
                let compte = {
                  numCompte: comptes.numCompte,
                  intitule: comptes.intitule,
                  montant: valeur4,
                  type: 'compte'
                };
                compte.montant > 0 ? table.push(compte):'';
              }
            }
          }
        }
      },
      error => {
        console.log(error);
      }
    );
  }

}
