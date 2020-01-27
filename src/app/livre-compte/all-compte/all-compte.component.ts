import { Component, OnInit } from '@angular/core';
import { ChapitreService } from 'src/app/services/chapitre.service';

@Component({
  selector: 'app-all-compte',
  templateUrl: './all-compte.component.html',
  styleUrls: ['./all-compte.component.css']
})
export class AllCompteComponent implements OnInit {
tableFct = [];
tableInvesti = [];
titreLivre;
  constructor(private chapitreService: ChapitreService) { }

  ngOnInit() {
     this.refreshTable(6, 2, 'Dépenses');
  }

  // private fetch chapitre
  public fetchAllChapitre(filter, table) {
    this.chapitreService.fetchAll(filter).subscribe(
      (data: any) => {  
        const temp = data;
      
        // chapitre
        for (let chapitre of temp) { 
          let chap = {
            numCompte: chapitre.numChap,
            intitule: chapitre.intitule,
            type: 'chapitre'
          };
          table.push(chap);

          // Section
          for (let sections of chapitre.sections) {
            let sec = {
              numCompte: sections.numSec,
              intitule: sections.intitule,
              type: 'section'
            };
            table.push(sec);

            //Article
            for (let articles of sections.articles) {
             
              let art = {
                numCompte: articles.numArt,
                intitule: articles.intitule,
                type: 'article'
              };
              table.push(art);

              // Compte
              for (let comptes of articles.comptes) {
                let compte = {
                  numCompte: comptes.numCompte,
                  intitule: comptes.intitule,
                  type: 'compte'
                };
                table.push(compte)
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

  refreshTable(numFct, numInvesti, titre){
    this.tableFct = [];
    this.tableInvesti = [];
    this.titreLivre = titre;

    this.fetchAllChapitre(
      this.chapitreService.filterLivreComptable(numFct), 
      this.tableFct
    );
 
    this.fetchAllChapitre(
     this.chapitreService.filterLivreComptable(numInvesti), 
     this.tableInvesti
   );
  }
}
