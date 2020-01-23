import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recette',
  templateUrl: './recette.component.html',
  styleUrls: ['./recette.component.css']
})
export class RecetteComponent implements OnInit {
 etablissementId;
  constructor(public route: ActivatedRoute) { }

  ngOnInit() {
    this.etablissementId = this.route.snapshot.params.etablissement_id;
    console.log(this.etablissementId);
  }

}
