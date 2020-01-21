import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { CategoryService } from 'src/app/services/category.service';
import { CategoryModel } from 'src/app/models/category-model';

@Component({
  selector: 'app-create-categorie',
  templateUrl: './create-categorie.component.html',
  styleUrls: ['./create-categorie.component.css']
})
export class CreateCategorieComponent implements OnInit {
  categorieForm: FormGroup;
  id = "";
  categorie: any;

  constructor(
    private formBulder: FormBuilder,
    private router: Router,
    public route: ActivatedRoute,
    private categorieService: CategoryService) { }

  ngOnInit() {

    this.initForm();
    if(this.route.snapshot.paramMap.get('id') !== ""){
      this.id = this.route.snapshot.paramMap.get('id');
      this.categorieService.get(this.id).subscribe((data) => {
        this.categorie = data;
        this.categorieForm.controls.name.setValue(this.categorie.nom);
        }, (error) => {
          console.log(error);
        });
    }
  }

  initForm() {
    this.categorieForm = this.formBulder.group({
      name: ['', Validators.required],
    });
  }

  onSubmitForm() {
    if (this.categorieForm.valid) {
        const category: CategoryModel = {
          nom: this.categorieForm.get('name').value
        };
        if(this.id!==""){
            this.updateCategory(this.id, category);
        }
        if(this.id == null){
          this.newCategory(category);
        }
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

// create a new category
private updateCategory(id, category) {
  this.categorieService.update(id, category).subscribe((data) => {
    // this.fetchStaffList();
    console.log("modifier");
  }, (error) => {
    console.log(error);
  });
}

}
