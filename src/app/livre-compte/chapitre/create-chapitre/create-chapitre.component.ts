import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CategoryService } from 'src/app/services/category.service';
import { ChapitreService } from 'src/app/services/chapitre.service';
import { ChapitreModel } from 'src/app/models/chapitre-model';

@Component({
  selector: 'app-create-chapitre',
  templateUrl: './create-chapitre.component.html',
  styleUrls: ['./create-chapitre.component.css']
})
export class CreateChapitreComponent implements OnInit {
  chapitreForm: FormGroup;
  categorieList = [];

  constructor(
    private formBulder: FormBuilder,
    private categoryService: CategoryService,
    private chapitreService: ChapitreService,
    private router: Router) { }

  ngOnInit() {
    this.initForm();
    this.fetchAllCategory();
  }

  initForm() {
    this.chapitreForm = this.formBulder.group({
      categorie: ['', Validators.required],
      numChap: ['', Validators.required],
      name: ['', Validators.required],
    });
  }

  onSubmitForm() {
    if (this.chapitreForm.valid) {
        const newChapitre: ChapitreModel = {
          "numChap": this.chapitreForm.get('numChap').value,
          "intitule": this.chapitreForm.get('name').value,
          "categoryId": this.chapitreForm.get('categorie').value
        }
        this.newChapitre(this.chapitreForm.get('categorie').value, newChapitre);
        this.router.navigate(['/livre-compte/chapitre']);
    }
  }

  private fetchAllCategory() {
  
    this.categoryService.fetchAll().subscribe((data: any) => {
      this.categorieList = data;
    }, (error) => {
      console.log(error);
    });
  }

  // fonction creer chapitre
  private newChapitre(id, category) {
    this.categoryService.createChapitre(id, category).subscribe((data) => {
      // this.fetchStaffList();
      console.log(data);
    }, (error) => {
      console.log(error);
    });
  }

}
