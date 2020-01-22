import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { ProgrammeService } from 'src/app/services/programme.service';
import { EtablissementService } from 'src/app/services/etablissement.service';
import { UtilisateurService } from 'src/app/services/utilisateur.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  etablissementForm: FormGroup;
  // programme list
  public programmes;

  constructor(
    private formBulder: FormBuilder,
    private programmeService: ProgrammeService,
    private etablissementService: EtablissementService,
    private utilisateurService: UtilisateurService,
    private router: Router) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.etablissementForm = this.formBulder.group({
      typeCompte: ['', Validators.required],
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
    this.getProgrammes();
  }

  /**
   * getProgrammes
   * @return void
   */
  public getProgrammes() {
    this.programmeService.fetchAll().subscribe((data) => {
      this.programmes = data;
    }, (error) => {
      console.log('an error is occur when geting programmes list');
    });
  }

  onSubmitForm() {
    if (this.etablissementForm.valid) {
      const etablissement = {
        nom: this.etablissementForm.value.name
      };
      const utilisateur = {
        email: this.etablissementForm.value.email,
        password: this.etablissementForm.value.password
      };
      // create Etablissement
      this.programmeService.newEtablissement(this.etablissementForm.value.typeCompte, etablissement)
                            .subscribe((data: any) => {
                              // create an utlisateur for this etablissement
                              this.etablissementService.createUtilisateur(data.id, utilisateur).subscribe((user) => {
                              }, (error) => {
                                // verify if the error is an email uniqueness error
                                  if (error.error.error.details.codes.email[0] == 'uniqueness') {
                                    // add the utilisateur to the etablissement
                                    const filter = {
                                      where: {
                                        email: utilisateur.email
                                      }
                                    };
                                    this.utilisateurService.fetchAll(filter).subscribe((existingUser) => {
                                      this.etablissementService.addUtilisateur(data.id, existingUser[0].id).subscribe();
                                    });
                                  }
                              });
                              this.router.navigate(['/etablissement']);
                            }, (error) => {

                            });
    }
  }
}
