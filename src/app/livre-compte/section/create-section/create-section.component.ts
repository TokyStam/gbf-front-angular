import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ChapitreService } from 'src/app/services/chapitre.service';
import { SectionModel } from 'src/app/models/section-model';
import { SectionService } from 'src/app/services/section.service';

@Component({
  selector: 'app-create-section',
  templateUrl: './create-section.component.html',
  styleUrls: ['./create-section.component.css']
})
export class CreateSectionComponent implements OnInit {
  sectionForm: FormGroup;
  chapitreList = [];
  id = "";
  element: any;
  edit: boolean;

  constructor(
    private formBulder: FormBuilder,
    private sectionService: SectionService,
    private chapiteService: ChapitreService,
    private router: Router,
    private route: ActivatedRoute) { 
      let id = this.route.snapshot.paramMap.get('id')
      if(id) {
        this.edit = true
      }
    }

  ngOnInit() {
    this.initForm();
    this.fetchAllChapitre();

    if(this.route.snapshot.paramMap.get('id') !== ""){
      this.id = this.route.snapshot.paramMap.get('id');
      this.sectionService.get(this.id).subscribe((data) => {

        this.element = data;
        this.sectionForm.controls.name.setValue(this.element.intitule);
        this.sectionForm.controls.chapitre.setValue(this.element.chapitreId);
        this.sectionForm.controls.numSec.setValue(this.element.numSec);

        }, (error) => {
          console.log(error);
        });
    }


  }

  initForm() {
    this.sectionForm = this.formBulder.group({
      chapitre: ['', Validators.required],
      numSec: ['', Validators.required],
      name: ['', Validators.required],
    });
  }

  onSubmitForm() {
    if (this.sectionForm.valid) {
        console.log(this.sectionForm);
    }
    const newSection: SectionModel = {
      "numSec": this.sectionForm.get('numSec').value,
      "intitule": this.sectionForm.get('name').value,
      "chapitreId": this.sectionForm.get('chapitre').value
    }
    if(this.id !== null){
      this.updateSection(this.id, newSection);
    }else if(this.id === null){
      this.newSection(this.sectionForm.get('chapitre').value, newSection);
    }

    this.router.navigate(['/livre-compte/section']);
  }

    // liste des chapitres
    private fetchAllChapitre() {
      
      this.chapiteService.fetchAll().subscribe((data: any) => {
        this.chapitreList = [...data];
      }, (error) => {
        console.log(error);
      });
    }

      // fonction creer chapitre
    private newSection(id, section) {
      this.chapiteService.createSection(id, section).subscribe((data) => {
        // this.fetchStaffList();
        console.log(data);
      }, (error) => {
        console.log(error);
      });
  }
    // create a new category
private updateSection(id, section) {
  this.sectionService.update(id, section).subscribe((data) => {
    // this.fetchStaffList();
    console.log("modifier");
  }, (error) => {
    console.log(error);
  });
}


}
