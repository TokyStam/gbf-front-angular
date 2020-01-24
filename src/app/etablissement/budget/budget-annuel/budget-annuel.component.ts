import { Component, OnInit, Output } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { BudgetComponent } from "../budget.component";
import { ChapitreService } from "src/app/services/chapitre.service";
import { ArticleService } from "src/app/services/article.service";
import { UtilisateurService } from "src/app/services/utilisateur.service";
import { DatePipe } from "@angular/common";
import { FormBuilder, FormGroup, FormControl } from "@angular/forms";

@Component({
  selector: "app-budget-annuel",
  templateUrl: "./budget-annuel.component.html",
  styleUrls: ["./budget-annuel.component.css"],
  providers: [DatePipe]
})
export class BudgetAnnuelComponent implements OnInit {
  public etablissement_id;
  tableFonctionnement = [];
  tableInvestissement = [];
  totalFct = 0;
  totalInvesti = 0;

  constructor(
    public route: ActivatedRoute,
    private chapitreService: ChapitreService,
    private budgetComponent: BudgetComponent,
    private userService: UtilisateurService,
    private datepipe: DatePipe,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    // get one user
    // this.getOnUser(this.etablissement_id);
    
    this.etablissement_id = this.budgetComponent.etablissement_id;
    console.log(this.etablissement_id);

    this.fetchAllChapitre(
      this.chapitreService.filterCompte(6, this.etablissement_id),
      this.tableFonctionnement, 'fct',
      this.datepipe.transform(Date.now(), 'yyyy')
    );

    this.fetchAllChapitre(
      this.chapitreService.filterCompte(2, this.etablissement_id),
      this.tableInvestissement, 'investi',
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

  private getOnUser(id){
     this.userService.get(id).subscribe(
       (data) => {
          console.log(data);
       },
       error => {
         console.log(error);
       } 
     );
  }

  onChangeYear(e){
    console.log(e.target.value);
    this.tableFonctionnement = [{}];
    this.fetchAllChapitre(
      this.chapitreService.filterCompte(6, this.etablissement_id),
      this.tableFonctionnement, 'fct',
      this.datepipe.transform('2018', 'yyyy')
    );

    this.fetchAllChapitre(
      this.chapitreService.filterCompte(2, this.etablissement_id),
      this.tableInvestissement, 'investi',
      this.datepipe.transform('2018', 'yyyy')
    );
  }
}
