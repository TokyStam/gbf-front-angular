import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-budget',
  templateUrl: './budget.component.html',
  styleUrls: ['./budget.component.css']
})
export class BudgetComponent implements OnInit {
public etablissement_id ;

  constructor(public route: ActivatedRoute) { }

  ngOnInit() {
		this.etablissement_id = this.route.snapshot.params.etablissement_id;
  }

}


// {"include":{"realtion":"sections","scope":{"include":{"relation":"articles"}},"where":{"numArt": "216"}}
		// this.initGroup();
		// const filter = {
		// 	 include:{
		// 		 relation:"chapitres",
		// 		 scope:{
		// 			 include:{
		// 				 relation:"sections",
		// 				 scope:{
		// 					 include:{
		// 						relation:"articles",
		// 						    scope:{
		// 								include:{
		// 									relation:"comptes"
		// 								}
		// 							}
		// 						}
		// 					}
		// 				}
		// 			}
		// 		},
		// 		where:{
		// 			nom: "Fonctionnement"
		// 		}
		// 	}
		
			// const filter = {
		// 	include:"comptes" ,
		// 	where:{
		// 		numArt: "603"
		// 	}
		// };

    // this.fetchComtpe(filter);
    

// {"include":{"relation":"articles","scope":{"include":{"relation":"comptes"}}}}},"where":{"numSec": "21"}}