import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-section',
  templateUrl: './create-section.component.html',
  styleUrls: ['./create-section.component.css']
})
export class CreateSectionComponent implements OnInit {
  sectionForm: FormGroup;
  chapitreList = [
    {"id": 6,"nom": "COMPTES DES CHARGES"},
    {"id": 2,"nom": "COMPTES D'IMMOBILISATIONS"}
  ]
  constructor(
    private formBulder: FormBuilder,
    private router: Router) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.sectionForm = this.formBulder.group({
      chapitre: ['', Validators.required],
      numSec: ['', Validators.required],
      name: ['', Validators.required],
    });
  }

  onSubmitForm() {
    if (this.sectionForm.valid) {
        console.log(this.sectionForm);
    }
  }


}
