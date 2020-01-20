import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SectionService } from 'src/app/services/section.service';
import { ArticleModel } from 'src/app/models/article-model';

@Component({
  selector: 'app-create-article',
  templateUrl: './create-article.component.html',
  styleUrls: ['./create-article.component.css']
})
export class CreateArticleComponent implements OnInit {
  articleForm: FormGroup;
  sectionList = []
  constructor(
    private formBulder: FormBuilder,
    private sectionService: SectionService,
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
    this.fetchAllSection();
  }

  onSubmitForm() {
    if (this.articleForm.valid) {
       var article: ArticleModel =  {
        "numArt": this.articleForm.get('numArt').value,
        "intitule": this.articleForm.get('name').value,
        "sectionId": this.articleForm.get('section').value
      }
    
      this.newArticles(this.articleForm.get('section').value, article);
      this.router.navigate(['/livre-compte/article']);
    }
  }

  
  private fetchAllSection() {
    this.sectionService.fetchAll().subscribe((data: any) => {
      this.sectionList = [...data];
    }, (error) => {
      console.log(error);
    });
  }

      // fonction creer chapitre
  private newArticles(id, article) {
    this.sectionService.createArticle(id, article).subscribe((data) => {
      // this.fetchStaffList();
      console.log(data);
    }, (error) => {
      console.log(error);
    });
  }

}
