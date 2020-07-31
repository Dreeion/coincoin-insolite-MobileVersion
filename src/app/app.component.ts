import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';

import { LanguageServiceService } from './services/languageService/language-service.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})


export class AppComponent {
  constructor(
    private router: Router,
    public afAuth: AngularFireAuth,
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private languageService: LanguageServiceService
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.afAuth.authState.subscribe(auth => {
      if (!auth) {
        this.router.navigateByUrl('/pages/login');
      } else {
        console.log('Connect�: ' + auth.uid);
      }
    });
      this.statusBar.styleDefault();
      this.splashScreen.hide();

      this.languageService.setInitialAppLanguage();
    });
  }
}
