import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  article = [
    {"id": 653,"nom": "Bourses"},
    {"id": 656, "nom": "Transferts aux privés"},
  ]
  constructor() { }

  ngOnInit() {
    console.log(this.article);
  }

}
