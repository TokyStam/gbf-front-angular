import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-investi',
  templateUrl: './create-investi.component.html',
  styleUrls: ['./create-investi.component.css']
})
export class CreateInvestiComponent implements OnInit {

  budgetForm: FormGroup;
  fieldSelectionForm: FormGroup;

  ///////////////////////////////////20//////////////////////////
compte20 = [
  {"numCompte": 2031, "intitule": "Indemnités et avantages liés à la fonction Personnel Permanent (PAT)"},
  {"numCompte": 2022, "intitule": "Indemnités et avantages liés à la fonction Personnel Permanent (PAT)"},
  {"numCompte": 2043, "intitule": "Indemnités et avantages liés à la fonction Personnel Permanent (PAT)"},
  {"numCompte": 2054, "intitule": "Indemnités et avantages liés à la fonction Personnel Permanent (PAT)"}
];
///////////////////////////////////21//////////////////////////
compte21 = [
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
		  immobCorpo: this.formBuilder.array([]),
		  immobIncorpo: this.formBuilder.array([])
		});

		this.initGroup();
	
	  }
	  initGroup(nomGroup = 'all') {
		if(nomGroup === 'all'){
			let immobCorpo = this.budgetForm.get('immobCorpo') as FormArray;
			let immobIncorpo = this.budgetForm.get('immobIncorpo') as FormArray;

			// Charge de personnel
      immobCorpo.push(this.formBuilder.group({
		
			compte: [null, Validators.required],
			montant: [null, Validators.required],
		  }));
  
		  // Achat de biens
      immobIncorpo.push(this.formBuilder.group({
		
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
			this.budgetForm.value.immobIncorpo.map(v=>{
				console.log(v);
			});
		    
			this.budgetForm.value.immobCorpo.map(v=>{
				console.log(v);
			});
	  }
	}


}
