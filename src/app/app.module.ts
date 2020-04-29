import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireStorageModule } from '@angular/fire/storage';

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
import {FirebaseService} from "./services/firebaseService/firebase-service.service";


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
    AngularFireStorageModule
  ],

  
  providers: [
    Camera,
    Facebook,
    StatusBar,
    SplashScreen,
    FirebaseService,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
