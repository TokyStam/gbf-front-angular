import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CategoryService } from 'src/app/services/category.service';
import { CategoryModel } from 'src/app/models/category-model';

@Component({
  selector: 'app-create-categorie',
  templateUrl: './create-categorie.component.html',
  styleUrls: ['./create-categorie.component.css']
})
export class CreateCategorieComponent implements OnInit {
  categorieForm: FormGroup;

  constructor(
    private formBulder: FormBuilder,
    private router: Router,
    private categorieService: CategoryService) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.categorieForm = this.formBulder.group({
      name: ['', Validators.required],
    });
  }

  onSubmitForm() {
    if (this.categorieForm.valid) {
        const newCategory: CategoryModel = {
          nom: this.categorieForm.get('name').value
        };
        this.newCategory(newCategory);
        this.router.navigate(['/livre-compte/categorie']);
    }
  }

  
// create a new category
private newCategory(category: CategoryModel) {
  this.categorieService.create(category).subscribe((data) => {
    // this.fetchStaffList();
    console.log(data);
  }, (error) => {
    console.log(error);
  });
}

}
