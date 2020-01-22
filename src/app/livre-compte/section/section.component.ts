import { Component, OnInit } from '@angular/core';
import { SectionService } from 'src/app/services/section.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.css']
})
export class SectionComponent implements OnInit {
  section = []
  constructor(private sectionService: SectionService,
              public route: ActivatedRoute) { }

  ngOnInit() {
    this.fetchAllSection();
  }

  private fetchAllSection() {
  
    this.sectionService.fetchAll().subscribe((data: any) => {
      this.section = [...data];
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
   this.sectionService.delete(id).subscribe((data) => {
     console.log('reussit');
     this.fetchAllSection();
   }, (error) => {
     console.log(error);
   });
  }
  
}
