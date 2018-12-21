import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  classe_fond_accueil: string = "fond_appli_accueil";
  classe_logo_accueil: string = "logo_accueil";
  classe_block_logo : string = "block_logo";

  constructor(public navCtrl: NavController) {

    

  }

}
