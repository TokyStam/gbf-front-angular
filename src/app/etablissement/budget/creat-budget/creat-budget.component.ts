import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';



@Component({
  selector: 'app-creat-budget',
  templateUrl: './creat-budget.component.html',
  styleUrls: ['./creat-budget.component.css']
})
export class CreatBudgetComponent implements OnInit {
  
  budgetForm: FormGroup;
  fieldSelectionForm: FormGroup;
////////////////////////////////60///////////////////////////////////
  article60 = [
	  {"numArt": 603, "intitule": "Achat de biens de fonctionnement général"},
	  {"numArt": 602, "intitule": "Achat de biens de fonctionnement général"},
	  {"numArt": 604, "intitule": "Achat de biens de fonctionnement général"},
  ];
  compte60 = [
	{"numCompte": 6031, "intitule": "Indemnités et avantages liés à la fonction Personnel Permanent (PAT)"},
	{"numCompte": 6022, "intitule": "Indemnités et avantages liés à la fonction Personnel Permanent (PAT)"},
	{"numCompte": 6043, "intitule": "Indemnités et avantages liés à la fonction Personnel Permanent (PAT)"},
	{"numCompte": 6054, "intitule": "Indemnités et avantages liés à la fonction Personnel Permanent (PAT)"}
];
/////////////////////////////////61/////////////////////////////////
article61 = [
	{"numArt": 613, "intitule": "Achat de biens de fonctionnement général"},
	{"numArt": 612, "intitule": "Achat de biens de fonctionnement général"},
];
compte61 = [
  {"numCompte": 6131, "intitule": "Indemnités et avantages liés à la fonction Personnel Permanent (PAT)"},
  {"numCompte": 6122, "intitule": "Indemnités et avantages liés à la fonction Personnel Permanent (PAT)"},
  {"numCompte": 6143, "intitule": "Indemnités et avantages liés à la fonction Personnel Permanent (PAT)"},
  {"numCompte": 6154, "intitule": "Indemnités et avantages liés à la fonction Personnel Permanent (PAT)"}
];
///////////////////////////////////62//////////////////////////
article62 = [
	{"numArt": 623, "intitule": "Achat de biens de fonctionnement général"},
	{"numArt": 622, "intitule": "Achat de biens de fonctionnement général"},
];
compte62 = [
  {"numCompte": 6231, "intitule": "Indemnités et avantages liés à la fonction Personnel Permanent (PAT)"},
  {"numCompte": 6222, "intitule": "Indemnités et avantages liés à la fonction Personnel Permanent (PAT)"},
  {"numCompte": 6243, "intitule": "Indemnités et avantages liés à la fonction Personnel Permanent (PAT)"},
  {"numCompte": 6254, "intitule": "Indemnités et avantages liés à la fonction Personnel Permanent (PAT)"}
];
///////////////////////////////////65//////////////////////////
article65 = [
	{"numArt": 653, "intitule": "Achat de biens de fonctionnement général"},
	{"numArt": 652, "intitule": "Achat de biens de fonctionnement général"},
];
compte65 = [
  {"numCompte": 6531, "intitule": "Indemnités et avantages liés à la fonction Personnel Permanent (PAT)"},
  {"numCompte": 6522, "intitule": "Indemnités et avantages liés à la fonction Personnel Permanent (PAT)"},
  {"numCompte": 6543, "intitule": "Indemnités et avantages liés à la fonction Personnel Permanent (PAT)"},
  {"numCompte": 6554, "intitule": "Indemnités et avantages liés à la fonction Personnel Permanent (PAT)"}
];

  formControlsVisibilityConfig;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router) { }

	ngOnInit() {
		this.budgetForm = this.formBuilder.group({
		  rows: this.formBuilder.array([]),
		  achatDeBiens: this.formBuilder.array([]),
		  achatServiceChargePerma: this.formBuilder.array([]),
		  transSub: this.formBuilder.array([])
		});

		this.initGroup();
	
		// this.fieldSelectionForm = this.formBuilder.group({
		//   driver: [false],
		//   contact_number: [false],
		//   transportation_unit: [false],
		//   special_instructions: [false]
		// });
	
		// this.formControlsVisibilityConfig = this.fieldSelectionForm.value;
	
	
	  }
	  initGroup(nomGroup = 'all') {
		if(nomGroup === 'all'){
			let rows = this.budgetForm.get('rows') as FormArray;
			let achatDeBiens = this.budgetForm.get('achatDeBiens') as FormArray;
			let achatServiceChargePerma = this.budgetForm.get('achatServiceChargePerma') as FormArray;
			let transSub = this.budgetForm.get('transSub') as FormArray;

			// Charge de personnel
		rows.push(this.formBuilder.group({
			article: [null, Validators.required],
			compte: [null, Validators.required],
			montant: [null, Validators.required],
		  }));
  
		  // Achat de biens
		   achatDeBiens.push(this.formBuilder.group({
			article: [null, Validators.required],
			  compte: [null, Validators.required],
			  montant: [null, Validators.required],
			}));
			// Achat de services st charges permanentes
			achatServiceChargePerma.push(this.formBuilder.group({
			article: [null, Validators.required],
			compte: [null, Validators.required],
			montant: [null, Validators.required],
			}));
			// Achat de biens
			transSub.push(this.formBuilder.group({
			article: [null, Validators.required],
			compte: [null, Validators.required],
			montant: [null, Validators.required],
			}));
  
		}else{
			let group = this.budgetForm.get(nomGroup) as FormArray;
				// Champs dynamique
			group.push(this.formBuilder.group({
				article: [null, Validators.required],
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

}


