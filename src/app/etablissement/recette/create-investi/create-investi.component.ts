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
compte10 = [
  {"numCompte": 101, "intitule": "Indemnités et avantages liés à la fonction Personnel Permanent (PAT)"},
  {"numCompte": 102, "intitule": "Indemnités et avantages liés à la fonction Personnel Permanent (PAT)"},
  {"numCompte": 103, "intitule": "Indemnités et avantages liés à la fonction Personnel Permanent (PAT)"},
  {"numCompte": 104, "intitule": "Indemnités et avantages liés à la fonction Personnel Permanent (PAT)"}
];
///////////////////////////////////21//////////////////////////



  formControlsVisibilityConfig;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router) { }

	ngOnInit() {
		this.budgetForm = this.formBuilder.group({
		  fondsDotation: this.formBuilder.array([]),
		});

		this.initGroup();
	
	  }
	  initGroup(nomGroup = 'all') {
		if(nomGroup === 'all'){
			let fondsDotation = this.budgetForm.get('fondsDotation') as FormArray;

			// Charge de personnel
      fondsDotation.push(this.formBuilder.group({
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
			this.budgetForm.value.fondsDotation.map(v=>{
				console.log(v);
			});
	  }
  }
  
  onListeChange(e){
    // const compte = this.compte10.slice();
    // const index = compte.findIndex(function(client){
    //     return compte.numCompte === e.target.value;
    // });

    // compte.splice(index, 1);
    // console.log(compte);
    // this.compte10 = compte;
  }
}
