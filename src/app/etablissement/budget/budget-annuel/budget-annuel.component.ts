import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BudgetComponent } from '../budget.component';
import { ChapitreService } from 'src/app/services/chapitre.service';

@Component({
  selector: 'app-budget-annuel',
  templateUrl: './budget-annuel.component.html',
  styleUrls: ['./budget-annuel.component.css']
})
export class BudgetAnnuelComponent implements OnInit {
  public etablissement_id ;

  constructor(public route: ActivatedRoute,
              private chapitreService: ChapitreService,
              private budgetComponent: BudgetComponent) { }

  ngOnInit() {
    this.etablissement_id = this.budgetComponent.etablissement_id;
    console.log(this.etablissement_id);
    
    this.fetchAllChapitre(this.chapitreService.filterCompte(6, this.etablissement_id));
  }

  // private fetch chapitre
  private fetchAllChapitre(filter){
    this.chapitreService.fetchAll(filter).subscribe(
      (data: any) => {
        console.log(data);
      },
      error => {
        console.log(error);
      }
    );
  }

}


