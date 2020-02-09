import { Component } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { ToastController } from '@ionic/angular';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  dataUser = {
      email: '',
      password: ''
    };
  connected: boolean;
  userId: string;
  mail: string;
  method: any;

  constructor(
    public afDB: AngularFireDatabase,
    public toastController: ToastController,
    public afAuth: AngularFireAuth
  ) {
    this.afAuth.authState.subscribe(auth => {
      if (!auth) {
        console.log('non connecté');
        this.connected = false;
      } else {
        console.log('connecté: ' + auth.uid);
        this.connected = true;
        this.userId = auth.uid;
        this.mail = auth.email;
        this.method = auth.providerData[0].providerId;
      }
    });
  }

ngOnInit() {this.logout(); }

  login() {
    this.afAuth.auth.signInWithEmailAndPassword(this.dataUser.email, this.dataUser.password)
    .then(() => {
      console.log('Connexion réussie');
      this.loginSuccess();
      this.dataUser = {
        email: '',
        password: ''
      };
    }).catch(err => {
      this.loginError();
      console.log('Erreur: ' + err);
    });
  }

  logout() {
    this.afAuth.auth.signOut();
  }

  async loginError() {
    const toast = await this.toastController.create({
      message: 'Adresse email ou mot de passe incorrect.',
      position: 'top',
      duration: 2000
    });
    toast.present();
  }

  async loginSuccess() {
    const toast = await this.toastController.create({
      message: 'Vous êtes maintenant connecté.',
      position: 'top',
      duration: 2000
    });
    toast.present();
  }
}
