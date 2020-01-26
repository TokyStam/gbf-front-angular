import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ArticleService } from 'src/app/services/article.service';
import { CompteService } from 'src/app/services/compte.service';

@Component({
  selector: 'app-create-compte',
  templateUrl: './create-compte.component.html',
  styleUrls: ['./create-compte.component.css']
})
export class CreateCompteComponent implements OnInit {
  compteForm: FormGroup;
  articleList = [];
  id = "";
  element: any;
  edit: boolean;

  constructor(
    private formBulder: FormBuilder,
    private articleService: ArticleService,
    private router: Router,
    private route: ActivatedRoute,
    private compteService: CompteService) {
      let id = this.route.snapshot.paramMap.get('id')
      if(id) {
        this.edit = true
      }
     }

  ngOnInit() {
    this.initForm();
    this.fetchAllArticle();

    
    if(this.route.snapshot.paramMap.get('id') !== ""){
      this.id = this.route.snapshot.paramMap.get('id');
      this.compteService.get(this.id).subscribe((data) => {

        this.element = data;
        this.compteForm.controls.name.setValue(this.element.intitule);
        this.compteForm.controls.article.setValue(this.element.articleId);
        this.compteForm.controls.numCompte.setValue(this.element.numCompte);

        }, (error) => {
          console.log(error);
        });
    }

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
      if(this.id !== null){
        this.updateCompte(this.id, compte);
      }else if(this.id === null){
        this.newCompte(this.compteForm.get('article').value, compte);
      }
     
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

    // create a new category
private updateCompte(id, compte) {
  this.compteService.update(id, compte).subscribe((data) => {
    // this.fetchStaffList();
    console.log("modifier");
  }, (error) => {
    console.log(error);
  });
}

}
