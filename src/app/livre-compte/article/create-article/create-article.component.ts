import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { SectionService } from 'src/app/services/section.service';
import { ArticleModel } from 'src/app/models/article-model';
import { ArticleService } from 'src/app/services/article.service';

@Component({
  selector: 'app-create-article',
  templateUrl: './create-article.component.html',
  styleUrls: ['./create-article.component.css']
})
export class CreateArticleComponent implements OnInit {
  articleForm: FormGroup;
  sectionList = [];
  id = "";
  element: any;

  constructor(
    private formBulder: FormBuilder,
    private articleService: ArticleService,
    private sectionService: SectionService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.initForm();

    if(this.route.snapshot.paramMap.get('id') !== ""){
      this.id = this.route.snapshot.paramMap.get('id');
      this.articleService.get(this.id).subscribe((data) => {

        this.element = data;
        this.articleForm.controls.name.setValue(this.element.intitule);
        this.articleForm.controls.section.setValue(this.element.sectionId);
        this.articleForm.controls.numArt.setValue(this.element.numArt);

        }, (error) => {
          console.log(error);
        });
    }

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

    // create a new category
private updateArticle(id, article) {
  this.articleService.update(id, article).subscribe((data) => {
    // this.fetchStaffList();
    console.log("modifier");
  }, (error) => {
    console.log(error);
  });
}

}
