import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DetailsRandonneePage } from './details-randonnee';

@NgModule({
  declarations: [
    DetailsRandonneePage,
  ],
  imports: [
    IonicPageModule.forChild(DetailsRandonneePage),
  ],
})
export class DetailsRandonneePageModule {}
