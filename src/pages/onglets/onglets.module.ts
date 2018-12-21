import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OngletsPage } from './onglets';

@NgModule({
  declarations: [
    OngletsPage,
  ],
  imports: [
    IonicPageModule.forChild(OngletsPage),
  ],
})
export class OngletsPageModule {}
