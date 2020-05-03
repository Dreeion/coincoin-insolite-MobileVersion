import { Component } from '@angular/core';
import {FirebaseService} from "../../services/firebaseService/firebase-service.service";
import {UserService} from "../../services/userService/user-service.service";

@Component({
  selector: 'app-social',
  templateUrl: './social.page.html',
  styleUrls: ['./social.page.scss'],
})
export class SocialPage {

  images = [];
  imagesUser = [];

  constructor(
      private firebase: FirebaseService,
      private user: UserService
  ) {
    this.readImages();
    this.getImagesUser();
  }

  readImages() {
    return this.firebase.getImagesDatabase(this.images, 'Images', null);
  }

  getImagesUser() {
    return this.firebase.getImagesUserDatabase('user-images', this.user.getCurrentUserId(), this.imagesUser);
  }


}
