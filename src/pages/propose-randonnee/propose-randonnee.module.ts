import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProposeRandonneePage } from './propose-randonnee';

@NgModule({
  declarations: [
    ProposeRandonneePage,
  ],
  imports: [
    IonicPageModule.forChild(ProposeRandonneePage),
  ],
})
export class ProposeRandonneePageModule {}
