import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CreationRandonneePage } from './creation-randonnee';

@NgModule({
  declarations: [
    CreationRandonneePage,
  ],
  imports: [
    IonicPageModule.forChild(CreationRandonneePage),
  ],
})
export class CreationRandonneePageModule {}
