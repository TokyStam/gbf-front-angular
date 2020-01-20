import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-categorie',
  templateUrl: './categorie.component.html',
  styleUrls: ['./categorie.component.css']
})
export class CategorieComponent implements OnInit {
  categorie = [];
  constructor(private categoryService: CategoryService) { }

  ngOnInit() {
    this.fetchAllCategory();
  }

  
private fetchAllCategory() {
  
  this.categoryService.fetchAll().subscribe((data: any) => {
    this.categorie = [...data];
    console.log(this.categorie);
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
  this.categoryService.delete(id).subscribe((data) => {
    console.log('reussit');
    this.fetchAllCategory();
  }, (error) => {
    console.log(error);
  });
}


}
