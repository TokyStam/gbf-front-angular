import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { formatNumber } from '@angular/common';

@Component({
  selector: 'app-create-fonct',
  templateUrl: './create-fonct.component.html',
  styleUrls: ['./create-fonct.component.css']
})
export class CreateFonctComponent implements OnInit {

  budgetForm: FormGroup;
  fieldSelectionForm: FormGroup;

  ///////////////////////////////////75//////////////////////////
compte75 = [
  {"numCompte": 2031, "intitule": "Indemnités et avantages liés à la fonction Personnel Permanent (PAT)"},
  {"numCompte": 2022, "intitule": "Indemnités et avantages liés à la fonction Personnel Permanent (PAT)"},
  {"numCompte": 2043, "intitule": "Indemnités et avantages liés à la fonction Personnel Permanent (PAT)"},
  {"numCompte": 2054, "intitule": "Indemnités et avantages liés à la fonction Personnel Permanent (PAT)"}
];
///////////////////////////////////77//////////////////////////
compte77 = [
  {"numCompte": 2131, "intitule": "Indemnités et avantages liés à la fonction Personnel Permanent (PAT)"},
  {"numCompte": 2122, "intitule": "Indemnités et avantages liés à la fonction Personnel Permanent (PAT)"},
  {"numCompte": 2143, "intitule": "Indemnités et avantages liés à la fonction Personnel Permanent (PAT)"},
  {"numCompte": 2154, "intitule": "Indemnités et avantages liés à la fonction Personnel Permanent (PAT)"}
];
///////////////////////////////////10//////////////////////////
compte10 = [
  {"numCompte": 2131, "intitule": "Indemnités et avantages liés à la fonction Personnel Permanent (PAT)"},
  {"numCompte": 2122, "intitule": "Indemnités et avantages liés à la fonction Personnel Permanent (PAT)"},
  {"numCompte": 2143, "intitule": "Indemnités et avantages liés à la fonction Personnel Permanent (PAT)"},
  {"numCompte": 2154, "intitule": "Indemnités et avantages liés à la fonction Personnel Permanent (PAT)"}
];


  formControlsVisibilityConfig;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router) { }

	ngOnInit() {
		this.budgetForm = this.formBuilder.group({
		  constributionTiere: this.formBuilder.array([]),
      recetteFiscal: this.formBuilder.array([])
		});

		this.initGroup();
	
	  }
	  initGroup(nomGroup = 'all') {
		if(nomGroup === 'all'){
			let constributionTiere = this.budgetForm.get('constributionTiere') as FormArray;
      let recetteFiscal = this.budgetForm.get('recetteFiscal') as FormArray;

			// Charge de personnel
      constributionTiere.push(this.formBuilder.group({
			compte: [null, Validators.required],
			montant: [null, Validators.required],
		  }));
  
		  // Achat de biens
      recetteFiscal.push(this.formBuilder.group({
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
		if(this.budgetForm.valid){
			this.budgetForm.value.recetteFiscal.map(v=>{
				console.log(v);
			});
		    
			this.budgetForm.value.constributionTiere.map(v=>{
				console.log(v);
			});
    }
    
  
	}


}
