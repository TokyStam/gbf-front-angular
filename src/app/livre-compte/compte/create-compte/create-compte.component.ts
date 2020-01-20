import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ArticleService } from 'src/app/services/article.service';

@Component({
  selector: 'app-create-compte',
  templateUrl: './create-compte.component.html',
  styleUrls: ['./create-compte.component.css']
})
export class CreateCompteComponent implements OnInit {
  compteForm: FormGroup;
  articleList = [];
  constructor(
    private formBulder: FormBuilder,
    private articleService: ArticleService,
    private router: Router) { }

  ngOnInit() {
    this.initForm();
    this.fetchAllArticle();
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
       const compte = {
        "numCompte": this.compteForm.get('numCompte').value,
        "intitule": this.compteForm.get('name').value,
        "articleId": this.compteForm.get('article').value
      }

      this.newCompte(this.compteForm.get('article').value, compte);
      this.router.navigate(['/livre-compte/compte']);
    }
  }

  private fetchAllArticle() {
    this.articleService.fetchAll().subscribe((data: any) => {
      this.articleList = [...data];
    }, (error) => {
      console.log(error);
    });
  }

   // fonction creer chapitre
   private newCompte(id, compte) {
    this.articleService.createCompte(id, compte).subscribe((data) => {
      // this.fetchStaffList();
      console.log(data);
    }, (error) => {
      console.log(error);
    });
  }

}
