import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ChapitreService } from 'src/app/services/chapitre.service';
import { SectionModel } from 'src/app/models/section-model';

@Component({
  selector: 'app-create-section',
  templateUrl: './create-section.component.html',
  styleUrls: ['./create-section.component.css']
})
export class CreateSectionComponent implements OnInit {
  sectionForm: FormGroup;
  chapitreList = [];
  constructor(
    private formBulder: FormBuilder,
    private chapiteService: ChapitreService,
    private router: Router) { }

  ngOnInit() {
    this.initForm();
    this.fetchAllChapitre();
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
    this.newSection(this.sectionForm.get('chapitre').value, newSection);
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

}
