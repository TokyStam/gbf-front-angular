import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-chapitre',
  templateUrl: './create-chapitre.component.html',
  styleUrls: ['./create-chapitre.component.css']
})
export class CreateChapitreComponent implements OnInit {
  chapitreForm: FormGroup;
  categorieList = [
    {"id": 1,"nom": "Fonctionnement"},
    {"id": 2,"nom": "Investissement"}
  ]

  constructor(
    private formBulder: FormBuilder,
    private router: Router) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.chapitreForm = this.formBulder.group({
      categorie: ['', Validators.required],
      numChap: ['', Validators.required],
      name: ['', Validators.required],
    });
  }

  onSubmitForm() {
    if (this.chapitreForm.valid) {
        console.log(this.chapitreForm);
    }
  }

}
