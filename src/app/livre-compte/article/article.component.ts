import { Component, OnInit } from '@angular/core';
import { ArticleService } from 'src/app/services/article.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  article = [];
  constructor(private articleService: ArticleService){}

  
  ngOnInit() {
    this.fetchAllArticle();
  }

  private fetchAllArticle() {
    this.articleService.fetchAll().subscribe((data: any) => {
      this.article = [...data];
    }, (error) => {
      console.log(error);
    });
  }

  onDelete(id){
    if(confirm("Voulez-vous vraimenet suprimer l'élélement?")){
        this.deleteAction(id);
    }
  }
  private deleteAction(id){
   this.articleService.delete(id).subscribe((data) => {
     this.fetchAllArticle();
   }, (error) => {
     console.log(error);
   });
  }

}
