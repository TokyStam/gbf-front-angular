import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-creat-budget',
  templateUrl: './creat-budget.component.html',
  styleUrls: ['./creat-budget.component.css']
})
export class CreatBudgetComponent implements OnInit {
  
  ChargeDePersonnel = [
		{
			"compte" : "6031-1",
      "intitule": "Ind. avantage pers. Perm(PAT)",
      "index": "n60311"
		},
		{
			"compte" : "6031-2",
      "intitule": "Ind. avantage pers. Perm(HC)",
      "index": "n60312"
		},
		{
			"compte" : "6032",
      "intitule": "Ind. avantage pers. non Perm(HC)",
      "index": "n6032"
		},
		{
			"compte" : "6032-1",
      "intitule": "Ind. avan liéés à la fonction (Etudiants)",
      "index": "n60321"
		},
		{
			"compte" : "6032-2",
      "intitule": "Ind. avantage pers.non perm(Vacataires)",
      "index": "n60322"
		}
	];

	AchatsDeBiens = [
		{
			"compte":"6111",
			"intitule":"Fournitures,article de bureau"
		},
		{
			"compte":"6112",
			"intitule":"Imprimés, cachets ,Documents administratifs"
		},
		{
			"compte":"6113",
			"intitule":"Consomptibles informatiques"
		},
		{
			"compte":"6114",
			"intitule":"Dépenses d'entretien"
		},
		{
			"compte":"6115",
			"intitule":"Petits outillage et fournitures d'atelier"
		},
		{
			"compte":"6117",
			"intitule":"Habillement du personnel"
		},
		{
			"compte":"6121",
			"intitule":"Fournitures scolaires"
		},
		{
			"compte":"6127",
			"intitule":"Fournitures sportives"
		},
		{
			"compte":"6131",
			"intitule":"Carburant et lubrifiant"
		}
	];
	AchatsDeServicesEtChargesPermanentes = [
		{
			"compte":"6211",
			"intitule":"Entretien de batiments"
		},
		{
			"compte":"6213",
			"intitule":"Entretien de materiels de transport"
		},
		{
			"compte":"6215",
			"intitule":"Entretien et reparation des materiels et mobiliers de bureau"
		},
		{
			"compte":"6217",
			"intitule":"Maintenance de réseaux, logiciels et materiels informatiques"
		},
		{
			"compte":"6218",
			"intitule":"Autres entretiens et maintenance"
		},
		{
			"compte":"6221",
			"intitule":"Fete et ceremonie officielle"
		},
		{
			"compte":"6222",
			"intitule":"Charges de représentation"
		},
		{
			"compte":"6224",
			"intitule":"Impression, reliure et insertion publicitaire"
		},
		{
			"compte":"6225",
			"intitule":"Frais colloques,seminaire,conference"
		},
		{
			"compte":"6231",
			"intitule":"Frais deplacement interieures"
		},
		{
			"compte":"6232",
			"intitule":"Frais deplacement exterieures"
		},
		{
			"compte":"6233",
			"intitule":"Locations de matériels de transport"
		},
		{
			"compte":"6241",
			"intitule":"Indemnité deplacement interieures"
		},
		{
			"compte":"6242",
			"intitule":"Indemnité deplacement exterieures"
		},
		{
			"compte":"6261",
			"intitule":"Frais postaux"
		},
		{
			"compte":"6262",
			"intitule":"Redenvence télephonique"
		},
		{
			"compte":"6263",
			"intitule":"Redenvence télephone mobile"
		},
		{
			"compte":"6266",
			"intitule":"Frais d'abonnement boite postale"
		},
		{
			"compte":"6268",
			"intitule":"Autres"
		},
		{
			"compte":"6271",
			"intitule":"Location d'immeuble"
		},
		{
			"compte":"6282",
			"intitule":"Frais  d'études,de recherche, stage et formation"
		},
		{
			"compte":"6284",
			"intitule":"Assurances"
		},
		{
			"compte":"6285",
			"intitule":"Services bancaire et assimilés"
		}
	];
	TransfertsEtSubventions = [
		{
			"compte":"6531",
			"intitule":"Bourses à Madagascar"
		},
		{
			"compte":"6541",
			"intitule":"Contribution Internationale"
		},
		{
			"compte":"6551",
			"intitule":"Transfert charge Sce public"
		},
		{
			"compte":"6565",
			"intitule":"Subvention au secteur privé"
		}
	];
	ImmobilisationsIncorporelles = [
		{
			"compte":"2040",
			"intitule":"Logiciels informatiques et assimilés"
		}
	];
	ImmobilisationsCorporelles = [
		{
			"compte":"2132",
			"intitule":"Batiments scolaires"
		},
		{
			"compte":"2154",
			"intitule":"Réseau de communication"
		},
		{
			"compte":"2155",
			"intitule":"Réseau d'électricité"
		},
		{
			"compte":"2161",
			"intitule":"Matériels et outillage technique"
		},
		{
			"compte":"2163",
			"intitule":"Matériels informatiques"
		},
		{
			"compte":"2164",
			"intitule":"Matériels et mobiliers de bureau"
		},
		{
			"compte":"2166",
			"intitule":"Matériels et mobiliers scolaires"
		},
		{
			"compte":"2172",
			"intitule":"Matériel automobile"
		}
  ];
  
  budgetForm: FormGroup;

  constructor(
    private formBulder: FormBuilder,
    private router: Router) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    // this.budgetForm = this.formBulder.group({
    //   n60311: ['', Validators.required]
    // });
  }

  onSubmitForm() {
    // if (this.budgetForm.valid) {
      
    // }
  }

}
