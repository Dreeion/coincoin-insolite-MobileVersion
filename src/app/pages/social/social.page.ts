import { Component } from '@angular/core';
import {FirebaseService} from "../../services/firebaseService/firebase-service.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-social',
  templateUrl: './social.page.html',
  styleUrls: ['./social.page.scss'],
})
export class SocialPage {

  images = [];

  constructor(
      private firebase: FirebaseService
  ) {
    this.readImages();
  }

  readImages() {
    return this.firebase.getImagesDatabase(this.images);
  }


}
