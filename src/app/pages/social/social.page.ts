import { Component, OnInit } from '@angular/core';
import {AngularFireDatabase, AngularFireDatabaseModule} from '@angular/fire/database';
import { AngularFireStorage } from '@angular/fire/storage';

@Component({
  selector: 'app-social',
  templateUrl: './social.page.html',
  styleUrls: ['./social.page.scss'],
})
export class SocialPage {

  images = [];

  constructor(
      public afDB: AngularFireDatabase,
      public afSG: AngularFireStorage
  ) {
    this.getImagesDatabase();
  }

  getImagesDatabase() {
    this.afDB.list('Images/').snapshotChanges(['child_added']).subscribe(images => {
      images.forEach(image => {
        this.getImagesStorage(image);
      });
    });
  }

  getImagesStorage(image: any) {
    const imgRef = image.payload.exportVal().ref;
    this.afSG.ref(imgRef).getDownloadURL().subscribe(imgUrl => {
      this.images.push({
        name: image.payload.exportVal().name,
        url: imgUrl
      })
;    });
  }

}
