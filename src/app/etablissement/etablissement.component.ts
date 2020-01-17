import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-etablissement',
  templateUrl: './etablissement.component.html',
  styleUrls: ['./etablissement.component.css']
})
export class EtablissementComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

}
