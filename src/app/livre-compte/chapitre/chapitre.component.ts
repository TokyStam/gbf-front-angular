import { Component, OnInit } from '@angular/core';
import { ChapitreService } from 'src/app/services/chapitre.service';

@Component({
  selector: 'app-chapitre',
  templateUrl: './chapitre.component.html',
  styleUrls: ['./chapitre.component.css']
})
export class ChapitreComponent implements OnInit {
  chapitre = []
  constructor(private chapiteService: ChapitreService) { }

  ngOnInit() {
    this.fetchAllChapitre();
  }

    
private fetchAllChapitre() {
  
  this.chapiteService.fetchAll().subscribe((data: any) => {
    this.chapitre = [...data];
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
 this.chapiteService.delete(id).subscribe((data) => {
   console.log('reussit');
   this.fetchAllChapitre();
 }, (error) => {
   console.log(error);
 });
}


}
