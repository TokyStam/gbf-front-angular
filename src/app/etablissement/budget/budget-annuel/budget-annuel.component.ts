import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BudgetComponent } from '../budget.component';

@Component({
  selector: 'app-budget-annuel',
  templateUrl: './budget-annuel.component.html',
  styleUrls: ['./budget-annuel.component.css']
})
export class BudgetAnnuelComponent implements OnInit {
  public etablissement_id ;

  constructor(public route: ActivatedRoute,
              private budgetComponent: BudgetComponent) { }

  ngOnInit() {
    this.etablissement_id = this.budgetComponent.etablissement_id;
		console.log(this.etablissement_id);
  }

}
