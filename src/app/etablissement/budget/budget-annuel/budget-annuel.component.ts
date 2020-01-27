import { Component, OnInit, Output, Inject } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { BudgetComponent } from "../budget.component";
import { ChapitreService } from "src/app/services/chapitre.service";
import { ArticleService } from "src/app/services/article.service";
import { UtilisateurService } from "src/app/services/utilisateur.service";
import { DatePipe } from "@angular/common";
import { FormBuilder, FormGroup, FormControl } from "@angular/forms";
import { ProgrammeService } from "src/app/services/programme.service";
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from "@angular/material";
import { BudgetService } from "src/app/services/budget.service";

export interface DialogData {
  numCompte: string;
  intitule: string;
  montant: number;
  idBudget: string;
}


export interface EtablissementInfo {
  nom: string;
  programme: string;
  designation: string;
}
@Component({
  selector: "app-budget-annuel",
  templateUrl: "./budget-annuel.component.html",
  styleUrls: ["./budget-annuel.component.css"],
  providers: [DatePipe]
})
export class BudgetAnnuelComponent implements OnInit {
  public etablissement_id;
  public etablissementInfo: EtablissementInfo;
  tableFonctionnement = [];
  tableInvestissement = [];
  totalFct = 0;
  totalInvesti = 0;
  dateMax;
  yearSearch;
  dateNow;

  constructor(
    public dialog: MatDialog,
    public route: ActivatedRoute,
    private budgetService: BudgetService,
    private chapitreService: ChapitreService,
    private programmeService: ProgrammeService,
    private budgetComponent: BudgetComponent,
    private userService: UtilisateurService,
    private datepipe: DatePipe,
    private fb: FormBuilder
  ) {}

  ngOnInit(){
    this.yearSearch = this.datepipe.transform(Date.now(), 'yyyy');
    // get max annee
    this.dateMax = this.datepipe.transform(Date.now(), "yyyy");
    this.dateNow = Date.now();

    this.refrechTable();
    
    this.etablissement_id = this.budgetComponent.etablissement_id;

  }

  private fetchEtablissementPgrogramme(filter) {
    this.programmeService.fetchAll(filter).subscribe(
      data => {
        const temp: any = data;
        for (let etablissement of temp) {
          for (let e of etablissement.etablissements) {
            this.etablissementInfo = {
              programme: etablissement.intitule,
              designation: etablissement.nom,
              nom: e.nom
            };
          }
        }
        console.log("etablissementInfo = ", this.etablissementInfo);
      },
      error => {
        console.log(error);
      }
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
                  this.datepipe.transform(date1, "yyyy") === yearsearch
                    ? (valeur1 += budgets.montant)
                    : "";
                }
              }
            }
          }
          category == "fct"
            ? (this.totalFct = valeur1)
            : (this.totalInvesti = valeur1);
          ////////////fin calcule chapitre///////////
          let chap = {
            numCompte: chapitre.numChap,
            intitule: chapitre.intitule,
            montant: valeur1,
            type: "chapitre"
          };
          chap.montant > 0 ? table.push(chap) : "";

          // Section
          for (let sections of chapitre.sections) {
            var valeur2 = 0;
            ////////////debut calcule hapitre//////////////
            for (let articles of sections.articles) {
              for (let comptes of articles.comptes) {
                for (let budgets of comptes.budgets) {
                  const date1 = new Date(budgets.annee);
                  this.datepipe.transform(date1, "yyyy") === yearsearch
                    ? (valeur2 += budgets.montant)
                    : "";
                }
              }
            }
            ////////////fin calcule chapitre///////////
            let sec = {
              numCompte: sections.numSec,
              intitule: sections.intitule,
              montant: valeur2,
              type: "section"
            };
            sec.montant > 0 ? table.push(sec) : "";

            //Article
            for (let articles of sections.articles) {
              var valeur3 = 0;
              ////////////debut calcule hapitre//////////////
              for (let comptes of articles.comptes) {
                for (let budgets of comptes.budgets) {
                  const date1 = new Date(budgets.annee);
                  this.datepipe.transform(date1, "yyyy") === yearsearch
                    ? (valeur3 += budgets.montant)
                    : "";
                }
              }
              ////////////fin calcule chapitre///////////
              let art = {
                numCompte: articles.numArt,
                intitule: articles.intitule,
                montant: valeur3,
                type: "article"
              };
              art.montant > 0 ? table.push(art) : "";

              // Compte
              for (let comptes of articles.comptes) {
                var valeur4 = 0;
                var budgetId;
                var annee;
                ////////////debut calcule hapitre//////////////
                for (let budgets of comptes.budgets) {
                  const date1 = new Date(budgets.annee);
                  
                    if(this.datepipe.transform(date1, "yyyy") === yearsearch){
                      valeur4 = budgets.montant;
                      budgetId = budgets.id;
                      annee = budgets.annee;
                    }
                }
                ////////////fin calcule chapitre///////////
                let compte = {
                  numCompte: comptes.numCompte,
                  intitule: comptes.intitule,
                  montant: valeur4,
                  id: budgetId,
                  annee: annee,
                  type: "compte"
                };
                compte.montant > 0 ? table.push(compte) : "";
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

  private getOnUser(id) {
    this.userService.get(id).subscribe(
      data => {
        const temp: any = data;
        for (let etablissement of temp) {
          for (let e of etablissement) {
            console.log(e);
          }
        }
      },
      error => {
        console.log(error);
      }
    );
  }

  onYearChose(e) {
    this.yearSearch = this.datepipe.transform(e, 'yyyy');
    this.tableFonctionnement = [];
    this.tableInvestissement = [];
    console.log(e);

    this.fetchAllChapitre(
      this.chapitreService.filterCompte(6, this.etablissement_id),
      this.tableFonctionnement,
      "fct",
      this.datepipe.transform(e, "yyyy")
    );

    this.fetchAllChapitre(
      this.chapitreService.filterCompte(2, this.etablissement_id),
      this.tableInvestissement,
      "investi",
      this.datepipe.transform(e, "yyyy")
    );
  }

  
    // suprimer une recette
    onDelete(id){
      if(confirm("Voulez-vous vraiment suprimer cette budget?")){
        this.deleteBudget(id);
        this.tableFonctionnement = [];
        this.tableInvestissement = [];
        this.refrechTable();
      }
    }

  // ourvir dialog modification
  openDialog(compte): void {
    const compteId = compte.id;

    const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
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
      this.modifierBudget(compte.id, recette);

      this.tableFonctionnement = [];
      this.tableInvestissement = [];
      this.refrechTable();
    
    });
  }

  private modifierBudget(id, budget){
    this.budgetService.update(id, budget).subscribe(
      (data) => {
        console.log(data);
      },
      error => {
        console.log(error);
      }
    );
  }
  
  private deleteBudget(id){
    this.budgetService.delete(id).subscribe(
      (data) => {
        console.log(data);
      },
      error => {
        console.log(error);
      }
    );
  }

  private refrechTable(){
    this.fetchAllChapitre(
      this.chapitreService.filterCompte(6, this.etablissement_id),
      this.tableFonctionnement,
      "fct",
      this.datepipe.transform(Date.now(), "yyyy")
    );

    this.fetchAllChapitre(
      this.chapitreService.filterCompte(2, this.etablissement_id),
      this.tableInvestissement,
      "investi",
      this.datepipe.transform(Date.now(), "yyyy")
    );
    this.fetchEtablissementPgrogramme(
      this.programmeService.filterPorgamme(this.etablissement_id)
    );
  }

}



@Component({
  selector: 'dialog-overview-example-dialog',
  templateUrl: 'dialog-overview-example-dialog.html',
})
export class DialogOverviewExampleDialog {

  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}
