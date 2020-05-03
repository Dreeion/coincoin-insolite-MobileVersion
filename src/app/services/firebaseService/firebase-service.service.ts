import {AngularFireDatabase} from '@angular/fire/database';
import { AngularFireStorage } from '@angular/fire/storage';
import {Injectable} from "@angular/core";
import * as firebase from "firebase";

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor( 
      public afDB: AngularFireDatabase,
      public afSG: AngularFireStorage
  ) {
  }

  getImagesDatabase(getImages, folder, key) {
    this.afDB.list(folder + '/').snapshotChanges(['child_added']).subscribe(images => {
      images.forEach(image => {
        this.getImagesStorage(image, getImages, key);
      });
    });
  }

  getDataFromFirebase(folder) : any {
    var array_r = []
    return new Promise((resolve) => {
      this.afDB.list(folder+'/').snapshotChanges(['child_added']).subscribe(images => {
        images.forEach( (element,index,array) => {
          array_r.push(element.payload.exportVal()) 
          if(index==array.length-1 ){
            resolve(array_r)
          }
        });
      });
    })
  }

  getImagesStorage(image: any, images: any, key) {
    const imgRef = image.payload.exportVal().ref;
    this.afSG.ref(imgRef).getDownloadURL().subscribe(imgUrl => {
      if (key == null) {
        images.push({
          name: image.payload.exportVal().name,
          url: imgUrl
        });
      } else {
        if (key == image.payload.key) {
          images.push({
            name: image.payload.exportVal().name,
            url: imgUrl
          });
        }
      }
    });
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
