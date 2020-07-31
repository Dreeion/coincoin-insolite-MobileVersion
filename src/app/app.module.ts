import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { FilePath } from '@ionic-native/file-path/ngx';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { IonicStorageModule } from '@ionic/storage';

export const firebaseConfig = {
    apiKey: 'AIzaSyCJaKO8d4pkleshE5R2AWPi53eZ0DPGt3M',
    authDomain: 'coincoininsolite-1cf37.firebaseapp.com',
    databaseURL: 'https://coincoininsolite-1cf37.firebaseio.com',
    projectId: 'coincoininsolite-1cf37',
    storageBucket: 'coincoininsolite-1cf37.appspot.com',
    messagingSenderId: '322401191780',
    appId: '1:322401191780:web:770faefa92d466cf939c71',
    measurementId: 'G-MXPY7WTVKH'
};

import { Facebook } from '@ionic-native/facebook/ngx';
import {FirebaseService} from './services/firebaseService/firebase-service.service';
import {HttpClient, HttpClientModule} from '@angular/common/http';

export function createTranslateLoader(http: HttpClient) {
    return new TranslateHttpLoader(http, 'assets/i18n/', '.json');
}

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
    IonicStorageModule.forRoot(),
    HttpClientModule,
    TranslateModule.forRoot({
        loader: {
            provide: TranslateLoader,
            useFactory: (createTranslateLoader),
            deps: [HttpClient]
        }
    })
  ],


  providers: [
    Camera,
    Facebook,
    StatusBar,
    SplashScreen,
    FirebaseService,
    FilePath,
    Geolocation,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
