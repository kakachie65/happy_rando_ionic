import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProfilUtilisateurPage } from './profil-utilisateur';

@NgModule({
  declarations: [
    ProfilUtilisateurPage,
  ],
  imports: [
    IonicPageModule.forChild(ProfilUtilisateurPage),
  ],
})
export class ProfilUtilisateurPageModule {}
