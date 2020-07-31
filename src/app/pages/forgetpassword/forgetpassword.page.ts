import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/auth";
import * as firebase from "firebase";
import { ToastController } from '@ionic/angular';
import {  MenuController } from '@ionic/angular';
import {TranslateService} from '@ngx-translate/core';


@Component({
  selector: 'app-forgetpassword',
  templateUrl: './forgetpassword.page.html',
  styleUrls: ['./forgetpassword.page.scss'],
})

export class ForgetpasswordPage implements OnInit {

    dataUser = {
        email: '',
    };

    constructor(
        private afAuth: AngularFireAuth,
        public toastController: ToastController,
        public menuCtrl: MenuController,
        private translate: TranslateService
    ) { }

  ngOnInit() {
  }

  getAuth() { 
    return this.afAuth.auth; 
  }

  async resetPwdError() {
    const toast = await this.toastController.create({
      message: this.translate.instant('TOAST.recover.invalid'),
      position: 'top',
      duration: 2000
    });
    toast.present();
  }

  async resetPwdSuccess() {
    const toast = await this.toastController.create({
      message: this.translate.instant('TOAST.recover.validate'),
      position: 'top',
      duration: 2000
    });
    toast.present();
  }

  async resetPwdNoEmail() {
    const toast = await this.toastController.create({
      message: this.translate.instant('TOAST.recover.mail'),
      position: 'top',
      duration: 2000
    });
    toast.present();
  }

  /** 
   * Initiate the password reset process for this user 
   * @param email email of the user 
   */ 
    resetPasswordInit(email: string) { 
        return this.afAuth.auth.sendPasswordResetEmail(
        email, 
        { url: 'https://coincoininsolite-1cf37.firebaseapp.com/__/auth/action' }); 
    }

    resetPassword() { 
        if (!this.dataUser.email) { 
          this.resetPwdNoEmail(); 
        }
        else
        {
            this.resetPasswordInit(this.dataUser.email)
            .then(
            () => this.resetPwdSuccess(), 
            (rejectionReason) => alert(rejectionReason))
            .catch(e => this.resetPwdError()); 
        }
    }

    ionViewWillEnter() {
      this.menuCtrl.enable(false);
     }
}

