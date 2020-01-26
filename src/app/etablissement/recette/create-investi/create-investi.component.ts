import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, FormArray, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { ArticleService } from "src/app/services/article.service";
import { SectionService } from "src/app/services/section.service";
import { CompteService } from "src/app/services/compte.service";
import { DatePipe } from "@angular/common";

@Component({
  selector: "app-create-investi",
  templateUrl: "./create-investi.component.html",
  styleUrls: ["./create-investi.component.css"],
  providers: [DatePipe]
})
export class CreateInvestiComponent implements OnInit {
  budgetForm: FormGroup;
  fieldSelectionForm: FormGroup;
  chosenYearDate: Date;
  compte10 = [];

  formControlsVisibilityConfig;

  constructor(
	private datePipe: DatePipe,
    private formBuilder: FormBuilder,
	private sectionService: SectionService,
	private compteService: CompteService,
    private router: Router
  ) {}

  ngOnInit() {
    this.budgetForm = this.formBuilder.group({
      annee: ["", Validators.required],
      fondsDotation: this.formBuilder.array([])
    });
    // initialisation du form
    this.initGroup();

    // utitlisation du filtre
    this.sectionService.fetchComtpeBySection(
      this.sectionService.filterCompte(10),
      this.compte10
    );
  }
  initGroup(nomGroup = "all") {
    this.budgetForm.controls.annee.setValue(new Date());
    if (nomGroup === "all") {
      let fondsDotation = this.budgetForm.get("fondsDotation") as FormArray;

      // Charge de personnel
      fondsDotation.push(
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
    this.budgetForm.value.fondsDotation.map(elem => {
      const recette = {
        montant: elem.montant,
        annee: year,
        compteId: elem.compte      };
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

  onYearChose(e) {
	  console.log(e);
    // const compte = this.compte10.slice();
    // const index = compte.findIndex(function(client){
    //     return compte.numCompte === e.target.value;
    // });
    // compte.splice(index, 1);
    // console.log(compte);
    // this.compte10 = compte;
  }
}
