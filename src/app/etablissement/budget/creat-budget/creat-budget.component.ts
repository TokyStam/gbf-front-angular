import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { ArticleService } from 'src/app/services/article.service';



@Component({
  selector: 'app-creat-budget',
  templateUrl: './creat-budget.component.html',
  styleUrls: ['./creat-budget.component.css']
})
export class CreatBudgetComponent implements OnInit {
  
  budgetForm: FormGroup;
  fieldSelectionForm: FormGroup;
////////////////////////////////60///////////////////////////////////

  compte60 = [];
/////////////////////////////////61/////////////////////////////////

compte61 = [
  {"numCompte": 6131, "intitule": "Indemnités et avantages liés à la fonction Personnel Permanent (PAT)"},
  {"numCompte": 6122, "intitule": "Indemnités et avantages liés à la fonction Personnel Permanent (PAT)"},
  {"numCompte": 6143, "intitule": "Indemnités et avantages liés à la fonction Personnel Permanent (PAT)"},
  {"numCompte": 6154, "intitule": "Indemnités et avantages liés à la fonction Personnel Permanent (PAT)"}
];
///////////////////////////////////62//////////////////////////
compte62 = [
  {"numCompte": 6231, "intitule": "Indemnités et avantages liés à la fonction Personnel Permanent (PAT)"},
  {"numCompte": 6222, "intitule": "Indemnités et avantages liés à la fonction Personnel Permanent (PAT)"},
  {"numCompte": 6243, "intitule": "Indemnités et avantages liés à la fonction Personnel Permanent (PAT)"},
  {"numCompte": 6254, "intitule": "Indemnités et avantages liés à la fonction Personnel Permanent (PAT)"}
];
///////////////////////////////////65//////////////////////////

compte65 = [
  {"numCompte": 6531, "intitule": "Indemnités et avantages liés à la fonction Personnel Permanent (PAT)"},
  {"numCompte": 6522, "intitule": "Indemnités et avantages liés à la fonction Personnel Permanent (PAT)"},
  {"numCompte": 6543, "intitule": "Indemnités et avantages liés à la fonction Personnel Permanent (PAT)"},
  {"numCompte": 6554, "intitule": "Indemnités et avantages liés à la fonction Personnel Permanent (PAT)"}
];

  formControlsVisibilityConfig;

  constructor(
	private formBuilder: FormBuilder,
	private artcileService: ArticleService,
    private router: Router) { }

	ngOnInit() {

		this.budgetForm = this.formBuilder.group({
		  rows: this.formBuilder.array([]),
		  achatDeBiens: this.formBuilder.array([]),
		  achatServiceChargePerma: this.formBuilder.array([]),
		  transSub: this.formBuilder.array([])
		});

		this.initGroup();

		// recupere compte
	
	  }
	  initGroup(nomGroup = 'all') {
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
		
		
		console.log(this.budgetForm.value);
	  }

	  onDeleteRow(rowIndex, nomGroup) {
		let rows = this.budgetForm.get(nomGroup) as FormArray;
		rows.removeAt(rowIndex)
	  }
	onSubmitForm() {
		// if (this.budgetForm.valid) {
			console.log(this.budgetForm.value);
		// }
	}

	// recuperer compte
	
	private getComptes(id) {
  
		this.artcileService.getComptes(id).subscribe((data: any) => {
		  this.compte60 = [...data];
		}, (error) => {
		  console.log(error);
		});
	  }


}


