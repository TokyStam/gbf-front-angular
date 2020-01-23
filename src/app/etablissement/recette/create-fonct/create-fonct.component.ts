import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { formatNumber } from '@angular/common';
import { SectionService } from 'src/app/services/section.service';
import { element } from 'protractor';

@Component({
  selector: 'app-create-fonct',
  templateUrl: './create-fonct.component.html',
  styleUrls: ['./create-fonct.component.css']
})
export class CreateFonctComponent implements OnInit {

  budgetForm: FormGroup;
  fieldSelectionForm: FormGroup;

  ///////////////////////////////////75//////////////////////////
compte75 = [];
///////////////////////////////////77//////////////////////////
compte77 = [];
delete77 = [];




  formControlsVisibilityConfig;

  constructor(
	private formBuilder: FormBuilder,
	private sectionService: SectionService,
    private router: Router) { }

	ngOnInit() {
		this.budgetForm = this.formBuilder.group({
      annee: ['', Validators.required],
		  constributionTiere: this.formBuilder.array([]),
      recetteFiscal: this.formBuilder.array([])
		});

		this.initGroup();

		// filtrer compte
	    this.sectionService.fetchComtpeBySection(this.sectionService.filterCompte(75), this.compte75);
		this.sectionService.fetchComtpeBySection(this.sectionService.filterCompte(77), this.compte77);
		
	  }
	  initGroup(nomGroup = 'all') {
      this.budgetForm.controls.annee.setValue(new Date());
		if(nomGroup === 'all'){
			let constributionTiere = this.budgetForm.get('constributionTiere') as FormArray;
      let recetteFiscal = this.budgetForm.get('recetteFiscal') as FormArray;

			// Constribution tiere
      constributionTiere.push(this.formBuilder.group({
			compte: [null, Validators.required],
			montant: [null, Validators.required],
		  }));
  
		  // recette fiscal
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


	onChange(e){

		// this.sectionService.fetchComtpeBySection(this.sectionService.filterCompte(75), this.compte77);
		// const comptes = this.compte77.slice();
		// this.budgetForm.value.recetteFiscal.map(v=>{
		// 	if(v == this.compte77.numCompte){
		// 		const index = comptes.findIndex(function(elem){
		// 				return elem.numCompte == v;
		// 		});
		// 		comptes.splice(index, 1);
		// 		this.compte77 = comptes;s
		// 	}
		// });
	}
}
