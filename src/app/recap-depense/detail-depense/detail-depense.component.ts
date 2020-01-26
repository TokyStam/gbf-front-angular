import { Component, OnInit } from "@angular/core";
import { ChapitreService } from "src/app/services/chapitre.service";
import { DatePipe } from "@angular/common";
import { ProgrammeService } from "src/app/services/programme.service";

@Component({
  selector: "app-detail-depense",
  templateUrl: "./detail-depense.component.html",
  styleUrls: ["./detail-depense.component.css"],
  providers: [DatePipe]
})
export class DetailDepenseComponent implements OnInit {
  tableFonctionnement = [];
  tableInvestissement = [];
  totalFct = 0;
  totalInvesti = 0;
  totalF028 = 0;
  totalF310 = 0;
  totalI028 = 0;
  totalI310 = 0;
  table1 = [];
  dateMax;
  constructor(
    private chapitreService: ChapitreService,
    private programmeService: ProgrammeService,
    private datepipe: DatePipe
  ) {}

  ngOnInit() {
    //get max date
    this.dateMax = this.datepipe.transform(Date.now(), 'yyyy');

    this.getEtablissementType(this.programmeService.getBudgetByProg());
    this.fetchAllChapitre(
      this.chapitreService.filterComplet(6),
      this.tableFonctionnement,
      "fct",
      this.datepipe.transform(Date.now(), "yyyy")
    );
    this.fetchAllChapitre(
      this.chapitreService.filterComplet(2),
      this.tableInvestissement,
      "investi",
      this.datepipe.transform(Date.now(), "yyyy")
    );
  }
  // private fetch chapitre
  public fetchAllChapitre(filter, table, category, yearsearch) {
    this.chapitreService.fetchAll(filter).subscribe(
      (data: any) => {
        const temp = data;
        var valeur11 = 0;
        var valeur12 = 0;
        // chapitre
        for (let chapitre of temp) {
          ////////////debut calcule hapitre//////////////
          for (let sections of chapitre.sections) {
            for (let articles of sections.articles) {
              for (let comptes of articles.comptes) {
                for (let budgets of comptes.budgets) {
                  const date1 = new Date(budgets.annee);

                  if (this.datepipe.transform(date1, "yyyy") === yearsearch) {
                    for (let prog of this.table1) {
                      if (
                        (prog.budgetId == budgets.id) &&
                        (prog.programme === "028")
                      ) {
                        valeur11 += budgets.montant;
                      } else if(
                        (prog.budgetId == budgets.id) &&
                        (prog.programme === "310")){
                        valeur12 += budgets.montant;
                      }
                    }
                  }
                }
              }
            }
          }
          category == 'fct'? this.totalFct = valeur12 : this.totalInvesti = valeur12;
          if(category === 'fct'){
             this.totalFct = valeur11 + valeur12;
             this.totalF028 =valeur11;
             this.totalF310 = valeur12; 
          }else{
            this.totalInvesti = valeur11 + valeur12;
            this.totalI028 =valeur11;
            this.totalI310 = valeur12; 
          }
          ////////////fin calcule chapitre///////////
          let chap = {
            numCompte: chapitre.numChap,
            intitule: chapitre.intitule,
            prog028: valeur11,
            prog310: valeur12,
            prevision: valeur11 + valeur12,
            type: "chapitre"
          };
          chap.prevision > 0 ? table.push(chap) : "";

          // Section
          for (let sections of chapitre.sections) {
            var valeur21 = 0;
            var valeur22 = 0;
            ////////////debut calcule hapitre//////////////
            for (let articles of sections.articles) {
              for (let comptes of articles.comptes) {
                for (let budgets of comptes.budgets) {
                  const date1 = new Date(budgets.annee);
                  if (this.datepipe.transform(date1, "yyyy") === yearsearch) {
                    for (let prog of this.table1) {
                      if (
                        (prog.budgetId == budgets.id) &&
                        (prog.programme === "028")
                      ) {
                        valeur21 += budgets.montant;
                      } else if(
                        (prog.budgetId == budgets.id) &&
                        (prog.programme === "310")){
                        valeur22 += budgets.montant;
                      }
                    }
                  }
                }
              }
            }
            ////////////fin calcule chapitre///////////
            let sec = {
              numCompte: sections.numSec,
              intitule: sections.intitule,
              prog028: valeur21,
              prog310: valeur22,
              prevision: valeur21 + valeur22,
              type: "section"
            };
            sec.prevision > 0 ? table.push(sec) : "";

            //Article
            for (let articles of sections.articles) {
              var valeur31 = 0;
              var valeur32 = 0;
              ////////////debut calcule hapitre//////////////
              for (let comptes of articles.comptes) {
                for (let budgets of comptes.budgets) {
                  const date1 = new Date(budgets.annee);
                  if (this.datepipe.transform(date1, "yyyy") === yearsearch) {
                    for (let prog of this.table1) {
                      if (
                        (prog.budgetId == budgets.id) &&
                        (prog.programme === "028")
                      ) {
                        valeur31 += budgets.montant;
                      } else if(
                        (prog.budgetId == budgets.id) &&
                        (prog.programme === "310")){
                        valeur32 += budgets.montant;
                      }
                    }
                  }
                }
              }
              ////////////fin calcule chapitre///////////
              let art = {
                numCompte: articles.numArt,
                intitule: articles.intitule,
                prog028: valeur31,
                prog310: valeur32,
                prevision: valeur31 + valeur32,
                type: "article"
              };
              art.prevision > 0 ? table.push(art) : "";

              // Compte
              for (let comptes of articles.comptes) {
                var valeur41 = 0;
                var valeur42 = 0;
                ////////////debut calcule hapitre//////////////
                for (let budgets of comptes.budgets) {
                  const date1 = new Date(budgets.annee);
                  if (this.datepipe.transform(date1, "yyyy") === yearsearch) {
                    for (let prog of this.table1) {
                      if (
                        (prog.budgetId == budgets.id) &&
                        (prog.programme === "028")
                      ) {
                        valeur41 += budgets.montant;
                      } else if(
                        (prog.budgetId == budgets.id) &&
                        (prog.programme === "310")){
                        valeur42 += budgets.montant;
                      }
                    }
                  }
                }
                ////////////fin calcule chapitre///////////
                let compte = {
                  numCompte: comptes.numCompte,
                  intitule: comptes.intitule,
                  prog028: valeur41,
                  prog310: valeur42,
                  prevision: valeur41 + valeur42,
                  type: "compte"
                };
                compte.prevision > 0 ? table.push(compte) : "";
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

  private getEtablissementType(filter) {
    this.programmeService.fetchAll(filter).subscribe(
      data => {
        for (let e of data) {
          for (let c of e.etablissements) {
            for (let d of c.budgets) {
              const programme = {
                budgetId: d.id,
                programme: e.intitule
              };
              this.table1.push(programme);
            }
          }
        }
      },
      error => {
        console.log(error);
      }
    );
  }

  // recherhe par date
  onYearChose(e){
    this.tableFonctionnement = [];
    this.tableInvestissement = [];
    
    this.fetchAllChapitre(
      this.chapitreService.filterComplet(6),
      this.tableFonctionnement,
      "fct",
      this.datepipe.transform(e, "yyyy")
    );
    this.fetchAllChapitre(
      this.chapitreService.filterComplet(2),
      this.tableInvestissement,
      "investi",
      this.datepipe.transform(e, "yyyy")
    );
  }

}
