import { Component, OnInit } from '@angular/core';
import { CompteService } from 'src/app/services/compte.service';

@Component({
  selector: 'app-compte',
  templateUrl: './compte.component.html',
  styleUrls: ['./compte.component.css']
})
export class CompteComponent implements OnInit {
  compte = [];
  constructor(private compteService: CompteService) { }

  ngOnInit() {
    this.fetchAllCompte();
  }
  private fetchAllCompte() {
    this.compteService.fetchAll().subscribe((data: any) => {
      this.compte = [...data];
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
   this.compteService.delete(id).subscribe((data) => {
     this.fetchAllCompte();
   }, (error) => {
     console.log(error);
   });
  }
}
