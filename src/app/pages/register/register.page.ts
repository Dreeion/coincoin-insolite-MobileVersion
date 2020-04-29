import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { ToastController } from '@ionic/angular';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

dataUser = {
      email: '',
      password: '',
      cgu: false
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

  ngOnInit() {
  }

signUp() {
if (this.dataUser.cgu === true) {
    if (this.dataUser.email !== null && this.dataUser.password !== null) {
      this.afAuth.auth.createUserWithEmailAndPassword(this.dataUser.email, this.dataUser.password)
          .then(() => {
            console.log('Connexion réussie');
            this.dataUser = {
              email: '',
              password: '',
              cgu: null
            };
            this.loginSuccess();
          }).catch(err => {
        this.loginError();
        console.log('Erreur: ' + err);
      });
    }
  } else {this.CGUError(); }
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
      message: 'Vous êtes maintenant inscrit.',
      position: 'top',
      duration: 2000
    });
    toast.present();
  }

  async CGUError() {
    const toast = await this.toastController.create({
      message: 'Vous devez accepter les CGU pour pouvoir continuer.',
      position: 'top',
      duration: 2000
    });
    toast.present();
  }
}
