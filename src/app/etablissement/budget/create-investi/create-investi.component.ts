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
			article: [null, Validators.required],
			compte: [null, Validators.required],
			montant: [null, Validators.required],
		  }));
  
		  // Achat de biens
      immobIncorpo.push(this.formBuilder.group({
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
	
	  }

	  onDeleteRow(rowIndex, nomGroup) {
		let rows = this.budgetForm.get(nomGroup) as FormArray;
		rows.removeAt(rowIndex)
	  }
  onSubmitForm() {
    // if (this.budgetForm.valid) {
		// console.log(this.budgetForm.value);
	// }
	// for(le)
  }


}
