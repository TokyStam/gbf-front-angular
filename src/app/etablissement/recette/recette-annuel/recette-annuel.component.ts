import { Component, OnInit, Inject } from '@angular/core';
import { DatePipe } from '@angular/common';
import { Router } from '@angular/router';
import { ChapitreService } from 'src/app/services/chapitre.service';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material';

export interface DialogData {
  numCompte: string;
  intitule: string;
  montant: number;
  idBudget: string;
}


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
  dateMax;
  totalInvesti = 0;
  dateNow ;
  yearSearch;

  compteInfo: DialogData;

  constructor(private datepipe: DatePipe,
              public dialog: MatDialog,
              private router: Router,
              private chapitreService: ChapitreService) { }

  ngOnInit() {
    this.yearSearch = this.datepipe.transform(Date.now(), 'yyyy');
    //get annee en cours
    this.dateNow = Date.now();
    this.dateMax = this.datepipe.transform(Date.now(), 'yyyy');

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
                var recettesId: string;
                var annee;
                ////////////debut calcule hapitre//////////////
                      for (let recettes of comptes.recettes) {
                            const date1 = new Date(recettes.annee);
                            this.datepipe.transform(date1, 'yyyy')  === yearsearch ?
                            valeur4 = recettes.montant: '';
                            recettesId = recettes.id;
                            annee =  recettes.annee;
                           
                      };
                  ////////////fin calcule chapitre///////////
                let compte = {
                  numCompte: comptes.numCompte,
                  intitule: comptes.intitule,
                  montant: valeur4,
                  id: recettesId,
                  annee: annee,
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

  onYearChose(e){

    this.yearSearch = this.datepipe.transform(e, 'yyyy');
    this.tableFonctionnement = [];
    this.tableInvestissement = [];

    this.fetchAllChapitre(
      this.chapitreService.filterRecette(7),
      this.tableFonctionnement, 'fct',
      this.datepipe.transform(e, 'yyyy')
    );

    this.fetchAllChapitre(
      this.chapitreService.filterRecette(1),
      this.tableInvestissement, 'investi',
      this.datepipe.transform(e, 'yyyy')
    );
  }

  // suprimer une recette
  onDelete(id){
    if(confirm("Voulez-vous vraiment suprimer cette recette?")){
      this.deleteRecette(id);
      this.tableFonctionnement = [];
      this.tableInvestissement = [];
      this.fetcAllData();
    }
  }

  // ourvir dialog modification
  openDialog(compte): void {
    const compteId = compte.id;

    const dialogRef = this.dialog.open(DialogRecette, {
      width: '340px',
      data: {
        numCompte: compte.numCompte, 
        intitule: compte.intitule,
        montant: compte.montant,
        idBudget: compte.id
      }
    });

    dialogRef.afterClosed().subscribe(result => {
        const recette = {
          montant: result
        }
      this.modifierRecette(compte.id, recette);

      this.tableFonctionnement = [];
      this.tableInvestissement = [];
      this.fetcAllData();
    
    });
  }

  private modifierRecette(id, recette){
    this.chapitreService.updateRecette(id, recette).subscribe(
      (data) => {
        console.log(data);
      },
      error => {
        console.log(error);
      }
    );
  }

  private deleteRecette(id){
    this.chapitreService.deleteRecette(id).subscribe(
      (data) => {
        console.log(data);
      },
      error => {
        console.log(error);
      }
    );
  }

  // fonction recuperer all data
  private fetcAllData() {
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

}


@Component({
  selector: 'app-dialog-recette',
  templateUrl: './dialog-recette.component.html',
})
export class DialogRecette {

  constructor(
    public dialogRef: MatDialogRef<DialogRecette>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}
