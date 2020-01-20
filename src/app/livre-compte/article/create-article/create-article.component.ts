import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-article',
  templateUrl: './create-article.component.html',
  styleUrls: ['./create-article.component.css']
})
export class CreateArticleComponent implements OnInit {
  articleForm: FormGroup;
  sectionList = [
    {"id": 60,"nom": "Charges de personnel"},
    {"id": 61, "nom": "Achat de biens"},
    {"id": 65,"nom": "Achats de services et charges permanentes"},
    {"id": 66,"nom": "Transferts et Subventions"}
  ]
  constructor(
    private formBulder: FormBuilder,
    private router: Router) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.articleForm = this.formBulder.group({
      section: ['', Validators.required],
      numArt: ['', Validators.required],
      name: ['', Validators.required],
    });
  }

  onSubmitForm() {
    if (this.articleForm.valid) {
        console.log(this.articleForm);
    }
  }

}
