import {AngularFireDatabase} from '@angular/fire/database';
import { AngularFireStorage } from '@angular/fire/storage';
import {Injectable} from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';
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

  getImagesDatabase(getImages, folder, key) {
    this.afDB.list(folder + '/').snapshotChanges(['child_added']).subscribe(images => {
      images.forEach(image => {
        this.getImagesStorage(image, getImages, key);
      });
    });
  }

  getDataFromFirebase(folder): any {
    let array_r = [];
    return new Promise((resolve) => {
      this.afDB.list(folder + '/').snapshotChanges(['child_added']).subscribe(images => {
        images.forEach( (element, index, array) => {
          array_r.push(element.payload.exportVal());
          if (index == array.length - 1 ) {
            resolve(array_r);
          }
        });
      });
    });
  }

  getImagesStorage(image: any, images: any, key) {
    const imgRef = image.payload.exportVal().url;
    this.afSG.ref(imgRef).getDownloadURL().subscribe(imgUrl => {
      if (key == null) {
        images.push({
          url: imgUrl
        })
      } else {
        if (key == image.payload.key) {
          images.push({
            url: imgUrl
          })
        }
      }
    });
  }

  getImageUrl(folder : string = "" ) : Promise<string>{
    return new Promise((resolve) => {
      const imagePath = new Date().getTime() + '.jpg'; // nom de l'image dans storage
      resolve(folder + "/" + imagePath)
    })
  }

  createKey(docName){
    return new Promise((resolve) => {
      const newPostKey = firebase.database().ref().child(docName).push().key; // création de la clé dans la database
      resolve(newPostKey)
    })
  }

  addData(path : string, data : any){
    this.afAuth.authState.subscribe(auth => {
      const updates = {};
      updates[path] = data;
      return firebase.database().ref().update(updates);
    }); 
  }

  uploadImage(url : string, image: string ) {
        console.log(url)
        console.log(image)
        const upload = this.afSG.ref(url).putString("data:image/jpeg;base64,"+ image, 'data_url', {contentType:'image/jpg'}); // upload de l'image dans storage
        return upload
  }


  getImagesUserDatabase(folder, uid, images) {
    firebase.database().ref(folder + '/' + uid).once('value')
        .then((snapshot) => {
          var image = Object.keys(snapshot.val());
          var key = '-' + Object.values(image)[0];
          this.getImagesDatabase(images, 'Images', key);
        });
  }

}
