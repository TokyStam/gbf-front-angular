import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, FormArray, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { formatNumber } from "@angular/common";
import { SectionService } from "src/app/services/section.service";
import { element } from "protractor";
import { CompteService } from "src/app/services/compte.service";

@Component({
  selector: "app-create-fonct",
  templateUrl: "./create-fonct.component.html",
  styleUrls: ["./create-fonct.component.css"]
})
export class CreateFonctComponent implements OnInit {
  budgetForm: FormGroup;
  fieldSelectionForm: FormGroup;
  
  compte75 = [];
  compte77 = [];
  delete77 = [];

  formControlsVisibilityConfig;

  constructor(
    private formBuilder: FormBuilder,
	private sectionService: SectionService,
	private compteService: CompteService,
    private router: Router
  ) {}

  ngOnInit() {
    this.budgetForm = this.formBuilder.group({
      annee: ["", Validators.required],
      constributionTiere: this.formBuilder.array([]),
      recetteFiscal: this.formBuilder.array([])
    });

    this.initGroup();

    // filtrer compte
    this.sectionService.fetchComtpeBySection(
      this.sectionService.filterCompte(75),
      this.compte75
    );
    this.sectionService.fetchComtpeBySection(
      this.sectionService.filterCompte(77),
      this.compte77
    );
  }
  initGroup(nomGroup = "all") {
    this.budgetForm.controls.annee.setValue(new Date());
    if (nomGroup === "all") {
      let constributionTiere = this.budgetForm.get(
        "constributionTiere"
      ) as FormArray;
      let recetteFiscal = this.budgetForm.get("recetteFiscal") as FormArray;

      // Constribution tiere
      constributionTiere.push(
        this.formBuilder.group({
          compte: [null, Validators.required],
          montant: [null, Validators.required]
        })
      );

      // recette fiscal
      recetteFiscal.push(
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
	const year: Date = new Date(this.budgetForm.get('annee').value);
    this.budgetForm.value.constributionTiere.map(elem => {
      const recette = {
        montant: elem.montant,
        annee: year,
        compteId: elem.compte      };
      this.createNewRecette(elem.compte, recette);
    });

    this.budgetForm.value.recetteFiscal.map(elem => {
      const recette = {
        montant: elem.montant,
        annee: year,
        compteId: elem.compte
      };
      this.createNewRecette(elem.compte, recette);
    });
    this.router.navigateByUrl(`etablissement/recette/recette-annuel`)
  }

  private createNewRecette(id, recette) {
    this.compteService.createRecette(id, recette).subscribe(
      (data: any) => {
        console.log("Ajout reussi");
      },
      error => {
        console.log(error);
      }
    );
  }

}
