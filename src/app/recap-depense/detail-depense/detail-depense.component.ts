import { Component, OnInit } from '@angular/core';
import { ChapitreService } from 'src/app/services/chapitre.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-detail-depense',
  templateUrl: './detail-depense.component.html',
  styleUrls: ['./detail-depense.component.css'],
  providers: [DatePipe]
})
export class DetailDepenseComponent implements OnInit {
  tableFonctionnement = [];
  totalFct = 0;
  totalInvesti = 0;
  constructor(private chapitreService: ChapitreService,
              private datepipe: DatePipe) { }

  ngOnInit() {
    
    this.fetchAllChapitre(
      this.chapitreService.filterComplet(6),
      this.tableFonctionnement, 'fct',
      this.datepipe.transform(Date.now(), 'yyyy')
    );

  }
  // private fetch chapitre
  private fetchAllChapitre(filter, table, category, yearsearch) {
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
                for (let budgets of comptes.budgets) {
                  const date1 = new Date(budgets.annee);
                  this.datepipe.transform(date1, 'yyyy')  === yearsearch ?
                  valeur1 += budgets.montant: '';
                     
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

          // Section
          for (let sections of chapitre.sections) {
            var valeur2 = 0;
            ////////////debut calcule hapitre//////////////
              for (let articles of sections.articles) {
                for (let comptes of articles.comptes) {
                  for (let budgets of comptes.budgets) {
                    const date1 = new Date(budgets.annee);
                    this.datepipe.transform(date1, 'yyyy')  === yearsearch ?
                    valeur2 += budgets.montant: '';
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
                    for (let budgets of comptes.budgets) {
                      const date1 = new Date(budgets.annee);
                      this.datepipe.transform(date1, 'yyyy')  === yearsearch ?
                      valeur3 += budgets.montant: '';
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
                      for (let budgets of comptes.budgets) {
                            const date1 = new Date(budgets.annee);
                            this.datepipe.transform(date1, 'yyyy')  === yearsearch ?
                            valeur4 += budgets.montant: '';
                           
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
