import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ResultatsRandonneePage } from './resultats-randonnee';

@NgModule({
  declarations: [
    ResultatsRandonneePage,
  ],
  imports: [
    IonicPageModule.forChild(ResultatsRandonneePage),
  ],
})
export class ResultatsRandonneePageModule {}
