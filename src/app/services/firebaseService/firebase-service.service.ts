import {AngularFireDatabase} from '@angular/fire/database';
import { AngularFireStorage } from '@angular/fire/storage';
import {Injectable} from '@angular/core';
import { resolve } from 'url';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { LoadingController, AlertController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(
      public afAuth: AngularFireAuth,
      public afDB: AngularFireDatabase,
      public afSG: AngularFireStorage,
      public loadingController: LoadingController,
      public alertController: AlertController,
  ) {
  }

  getImagesDatabase(getImages) {
    this.afDB.list('Images/').snapshotChanges(['child_added']).subscribe(images => {
      images.forEach(image => {
        this.getImagesStorage(image, getImages);
      });
    });
  }

  getDataFromFirebase(folder): any {
    let array_r = [];
    return new Promise((resolve) => {
      this.afDB.list(folder + '/').snapshotChanges(['child_added']).subscribe(images => {
        images.forEach( (element, index, array) => {
          array_r.push(element.payload.exportVal())
          if (index == array.length - 1 ) {
            resolve(array_r);
          }
        });
      });
    });
  }

  getImagesStorage(image: any, images: any) {
    const imgRef = image.payload.exportVal().ref;
    this.afSG.ref(imgRef).getDownloadURL().subscribe(imgUrl => {
      images.push({
        name: image.payload.exportVal().name,
        url: imgUrl
      });
    });
  }

  insertData(postData) {
    this.afAuth.authState.subscribe(auth => {
      let newPostKey = firebase.database().ref().child('Users').push().key;
      let updates = {};
      updates['/user-images/' + auth.uid + '/' + newPostKey ] = postData;
      updates['/Images/' + newPostKey ] = postData;
      return firebase.database().ref().update(updates);
    });
  }

  // imagePath --> adresse de l'image dans firebase
  uploadImage(imagePath: string, upload: any, image: string) {
  imagePath = new Date().getTime() + '.jpg';
  upload = this.afSG.ref(imagePath).putString(image, 'data_url');
  image = 'https://www.kasterencultuur.nl/editor/placeholder.jpg';
}



}
