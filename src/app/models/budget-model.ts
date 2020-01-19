export interface BudgetModel {
  montant: number;
  annee: Date;
  id?: string;
  compteId: string;
  etablissementId: string;
}
