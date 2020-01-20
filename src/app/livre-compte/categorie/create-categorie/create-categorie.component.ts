import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-categorie',
  templateUrl: './create-categorie.component.html',
  styleUrls: ['./create-categorie.component.css']
})
export class CreateCategorieComponent implements OnInit {
  categorieForm: FormGroup;

  constructor(
    private formBulder: FormBuilder,
    private router: Router) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.categorieForm = this.formBulder.group({
      name: ['', Validators.required],
    });
  }

  onSubmitForm() {
    if (this.categorieForm.valid) {
        console.log(this.categorieForm);
    }
  }

}
