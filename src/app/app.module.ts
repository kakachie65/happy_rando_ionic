import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

// zone importation des pages
import { InscriptionUtilisateurPage } from '../pages/inscription-utilisateur/inscription-utilisateur';
import { ResultatsRandonneePage } from '../pages/resultats-randonnee/resultats-randonnee';
import { RechercheRandonneePage } from '../pages/recherche-randonnee/recherche-randonnee';
import { ProposeRandonneePage } from '../pages/propose-randonnee/propose-randonnee';
import { ProfilUtilisateurPage } from '../pages/profil-utilisateur/profil-utilisateur';
import { DetailsRandonneePage } from '../pages/details-randonnee/details-randonnee';
import { CreationRandonneePage } from '../pages/creation-randonnee/creation-randonnee';
import { ConnexionInscriptionPage } from '../pages/connexion-inscription/connexion-inscription';
// barre de navigation
import { OngletsPage } from '../pages/onglets/onglets';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    InscriptionUtilisateurPage,
    ResultatsRandonneePage,
    RechercheRandonneePage,
    ProposeRandonneePage,
    ProfilUtilisateurPage,
    DetailsRandonneePage,
    CreationRandonneePage,
    ConnexionInscriptionPage,
    OngletsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    InscriptionUtilisateurPage,
    ResultatsRandonneePage,
    RechercheRandonneePage,
    ProposeRandonneePage,
    ProfilUtilisateurPage,
    DetailsRandonneePage,
    CreationRandonneePage,
    ConnexionInscriptionPage,
    OngletsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
