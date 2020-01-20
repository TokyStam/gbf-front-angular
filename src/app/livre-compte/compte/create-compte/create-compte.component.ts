import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-compte',
  templateUrl: './create-compte.component.html',
  styleUrls: ['./create-compte.component.css']
})
export class CreateCompteComponent implements OnInit {
  compteForm: FormGroup;
  articleList = [
    {"id": 653,"nom": "Bourses"},
    {"id": 656, "nom": "Transferts aux privés"},
  ];
  constructor(
    private formBulder: FormBuilder,
    private router: Router) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.compteForm = this.formBulder.group({
      article: ['', Validators.required],
      numCompte: ['', Validators.required],
      name: ['', Validators.required],
    });
  }

  onSubmitForm() {
    if (this.compteForm.valid) {
        console.log(this.compteForm);
    }
  }
}
