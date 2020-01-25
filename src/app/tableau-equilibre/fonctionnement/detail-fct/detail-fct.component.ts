import { Component, OnInit } from '@angular/core';
import { ChapitreService } from 'src/app/services/chapitre.service';
import { DatePipe } from '@angular/common';
import { ProgrammeService } from 'src/app/services/programme.service';


@Component({
  selector: 'app-detail-fct',
  templateUrl: './detail-fct.component.html',
  styleUrls: ['./detail-fct.component.css'],
  providers: [DatePipe]
})
export class DetailFctComponent implements OnInit {
  tableFonctionnementDepense = [];
  tableFonctionnementRecette = [];
  totalFctDepense = 0;
  totalFctRecette = 0;
  table1 = [];
  constructor(private programmeService: ProgrammeService,
              private chapitreService: ChapitreService,
              private datepipe: DatePipe) { }

  ngOnInit() {
      // get couple budgetId and PorgrammeType
      this.getEtablissementType(this.programmeService.getBudgetByProg());

      this.fetchAllChapitreDepense(
      this.chapitreService.filterComplet(6),
      this.tableFonctionnementDepense,
      "fct",
      this.datepipe.transform(Date.now(), "yyyy")
    );

    this.fetchAllChapitreRecette(
      this.chapitreService.filterRecette(7),
      this.tableFonctionnementRecette, 'fct',
      this.datepipe.transform(Date.now(), 'yyyy')
    );

  }

    // private fetch chapitre
    public fetchAllChapitreDepense(filter, table, category, yearsearch) {
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
            category == 'fct'? this.totalFctDepense = valeur12 + valeur11: '';
            
            ////////////fin calcule chapitre///////////
            let chap = {
              numCompte: chapitre.numChap,
              intitule: chapitre.intitule,
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
        });
      }

      // private fetch chapitre
  public fetchAllChapitreRecette(filter, table, category, yearsearch) {
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
          category == 'fct'? this.totalFctRecette = valeur1 : '';
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
