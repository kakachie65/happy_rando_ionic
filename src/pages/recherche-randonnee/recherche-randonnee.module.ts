import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RechercheRandonneePage } from './recherche-randonnee';

@NgModule({
  declarations: [
    RechercheRandonneePage,
  ],
  imports: [
    IonicPageModule.forChild(RechercheRandonneePage),
  ],
})
export class RechercheRandonneePageModule {}
