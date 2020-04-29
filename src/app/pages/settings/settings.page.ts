import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';
import { ToastController } from '@ionic/angular';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {

  ngOnInit() {}

  constructor(
    public afAuth: AngularFireAuth,
    public toastController: ToastController,
    private navCtrl: NavController
    ) {}

  presentAlert() {
    var user = firebase.auth().currentUser;

    user.delete().then(() => {
      this.navCtrl.navigateRoot('pages/login');
    }).catch(function(error) {
      // An error happened.
    });
  }

}