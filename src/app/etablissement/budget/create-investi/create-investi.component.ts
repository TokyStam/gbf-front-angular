import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, FormArray, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { ArticleService } from "src/app/services/article.service";
import { CompteService } from "src/app/services/compte.service";
import { SectionService } from "src/app/services/section.service";
import { BudgetComponent } from "../budget.component";
import { BudgetService } from "src/app/services/budget.service";

@Component({
  selector: "app-create-investi",
  templateUrl: "./create-investi.component.html",
  styleUrls: ["./create-investi.component.css"]
})
export class CreateInvestiComponent implements OnInit {
  budgetForm: FormGroup;
  fieldSelectionForm: FormGroup;
  etablissementId;

  compte20 = [];
  compte21 = [];

  formControlsVisibilityConfig;

  constructor(
    private formBuilder: FormBuilder,
    private articleService: ArticleService,
    private budgetComponent: BudgetComponent,
    private compteService: CompteService,
    private sectionService: SectionService,
    private budgetService: BudgetService,
    private router: Router
  ) {}

  ngOnInit() {
    this.etablissementId = this.budgetComponent.etablissement_id;
    console.log(this.etablissementId);

    this.budgetForm = this.formBuilder.group({
      annee: ["", Validators.required],
      immobCorpo: this.formBuilder.array([]),
      immobIncorpo: this.formBuilder.array([])
    });

    // utitlisation du filtre
    this.sectionService.fetchComtpeBySection(
      this.sectionService.filterCompte(20),
      this.compte20
    );
    this.sectionService.fetchComtpeBySection(
      this.sectionService.filterCompte(21),
      this.compte21
    );
  }
  initGroup(nomGroup = "all") {
    this.budgetForm.controls.annee.setValue(new Date());
    if (nomGroup === "all") {
      let immobCorpo = this.budgetForm.get("immobCorpo") as FormArray;
      let immobIncorpo = this.budgetForm.get("immobIncorpo") as FormArray;

      // Charge de personnel
      immobCorpo.push(
        this.formBuilder.group({
          compte: [null, Validators.required],
          montant: [null, Validators.required]
        })
      );

      // Achat de biens
      immobIncorpo.push(
        this.formBuilder.group({
          compte: [null, Validators.required],
          montant: [null, Validators.required]
        })
      );
    } else {
      let group = this.budgetForm.get(nomGroup) as FormArray;
      // Champs dynamique
      group.push(
        this.formBuilder.group({
          compte: [null, Validators.required],
          montant: [null, Validators.required]
        })
      );
    }
  }

  onDeleteRow(rowIndex, nomGroup) {
    let rows = this.budgetForm.get(nomGroup) as FormArray;
    rows.removeAt(rowIndex);
  }

  onSubmitForm() {
    const year: Date = this.budgetForm.get("annee").value;
    this.budgetForm.value.immobCorpo.map(elem => {
      const budget = {
        montant: elem.montant,
        annee: year,
        compteId: elem.compte,
        etablissementId: this.etablissementId
      };
      this.createNewBudget(budget);
    });

    this.budgetForm.value.immobIncorpo.map(elem => {
      const budget = {
        montant: elem.montant,
        annee: year,
        compteId: elem.compte,
        etablissementId: this.etablissementId
      };
      this.createNewBudget(budget);
    });

    // this.router.navigate(['/etablissement/'+ this.etablissementId + '/budget-annuel']);
  }

  // liste rdv a venir
  private fetchComtpe(filter = {}) {
    this.compteService.get(filter).subscribe(
      (data: any) => {
        console.log(data);
      },
      error => {
        console.log(error);
      }
    );
  }

  private createNewBudget(budget) {
    this.budgetService.create(budget).subscribe(
      (data: any) => {
        console.log("Ajout reussi");
      },
      error => {
        console.log(error);
      }
    );
  }
}
