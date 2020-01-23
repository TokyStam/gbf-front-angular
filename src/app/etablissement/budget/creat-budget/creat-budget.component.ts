import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { ArticleService } from 'src/app/services/article.service';
import { SectionService } from 'src/app/services/section.service';
import { BudgetService } from 'src/app/services/budget.service';
import { BudgetComponent } from '../budget.component';



@Component({
  selector: 'app-creat-budget',
  templateUrl: './creat-budget.component.html',
  styleUrls: ['./creat-budget.component.css']
})
export class CreatBudgetComponent implements OnInit {
  
  budgetForm: FormGroup;
  fieldSelectionForm: FormGroup;
  etablissementId;
  
compte60 = [];
compte61 = [];
compte62 = [];
compte65 = [];

  formControlsVisibilityConfig;

  constructor(
	private formBuilder: FormBuilder,
	private budgetComponent: BudgetComponent,
	private artcileService: ArticleService,
	public route: ActivatedRoute,
	private sectionService:SectionService,
	private budgetService: BudgetService,
    private router: Router) { }

	ngOnInit() {
		this.etablissementId = this.budgetComponent.etablissement_id;

		this.budgetForm = this.formBuilder.group({
		  annee: ['', Validators.required],
		  rows: this.formBuilder.array([]),
		  achatDeBiens: this.formBuilder.array([]),
		  achatServiceChargePerma: this.formBuilder.array([]),
		  transSub: this.formBuilder.array([])
		});

		this.initGroup();
		
		// utitlisation du filtre
		this.sectionService.fetchComtpeBySection(this.sectionService.filterCompte(60), this.compte60);
		this.sectionService.fetchComtpeBySection(this.sectionService.filterCompte(61), this.compte61);
		this.sectionService.fetchComtpeBySection(this.sectionService.filterCompte(62), this.compte62);
		this.sectionService.fetchComtpeBySection(this.sectionService.filterCompte(65), this.compte65);
	  }
	  initGroup(nomGroup = 'all') {
		this.budgetForm.controls.annee.setValue(new Date());
		if(nomGroup === 'all'){
			let rows = this.budgetForm.get('rows') as FormArray;
			let achatDeBiens = this.budgetForm.get('achatDeBiens') as FormArray;
			let achatServiceChargePerma = this.budgetForm.get('achatServiceChargePerma') as FormArray;
			let transSub = this.budgetForm.get('transSub') as FormArray;

			// Charge de personnel
		rows.push(this.formBuilder.group({
		
			compte: [null, Validators.required],
			montant: [null, Validators.required],
		  }));
  
		  // Achat de biens
		   achatDeBiens.push(this.formBuilder.group({
		
			  compte: [null, Validators.required],
			  montant: [null, Validators.required],
			}));
			// Achat de services st charges permanentes
			achatServiceChargePerma.push(this.formBuilder.group({
		
			compte: [null, Validators.required],
			montant: [null, Validators.required],
			}));
			// Achat de biens
			transSub.push(this.formBuilder.group({
		
			compte: [null, Validators.required],
			montant: [null, Validators.required],
			}));
  
		}else{
			let group = this.budgetForm.get(nomGroup) as FormArray;
				// Champs dynamique
			group.push(this.formBuilder.group({
			
				compte: [null, Validators.required],
				montant: [null, Validators.required],
			}));
			}
	  }

	  onDeleteRow(rowIndex, nomGroup) {
		let rows = this.budgetForm.get(nomGroup) as FormArray;
		rows.removeAt(rowIndex)
	  }
	onSubmitForm() {
	  const year: Date = this.budgetForm.get('annee').value;
	  this.budgetForm.value.rows.map(elem => {
		  const budget = {
			 montant: elem.montant,
			 annee: year,
			 compteId: elem.compte,
			 etablissementId: this.etablissementId
		  }
		  this.createNewBudget(budget);
	  });
	}

	// recuperer compte
	
	private getComptes(id) {
		this.artcileService.getComptes(id).subscribe((data: any) => {
		  this.compte60 = [...data];
		}, (error) => {
		  console.log(error);
		});
	}

	private createNewBudget(budget) {
		this.budgetService.create(budget).subscribe((data: any) => {
		console.log("Ajout reussi");
		}, (error) => {
		  console.log(error);
		});
	}
}


