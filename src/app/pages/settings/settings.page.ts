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

  constructor(
    public afAuth: AngularFireAuth,
    public toastController: ToastController,
    private navCtrl: NavController
    ) {}

  dataUser = {
        email: '',
        password: ''
      };

  ngOnInit() {}

  deleteUser() {
    var user = firebase.auth().currentUser;

    user.delete().then(() => {
      this.navCtrl.navigateRoot('pages/login');
    }).catch(function(error) {
      // An error happened.
    });
  }

  resetPassword() {
      var user = firebase.auth().currentUser;
  var newPassword = this.dataUser.password;

  user.updatePassword(newPassword).then(function() {
    // Update successful.
    console.log("passwordREset");
  }).catch(function(error) {
    // An error happened.
  });
  }

}