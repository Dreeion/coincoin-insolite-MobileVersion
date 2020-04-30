import {AngularFireDatabase} from '@angular/fire/database';
import { AngularFireStorage } from '@angular/fire/storage';
import {Injectable} from "@angular/core";
import { resolve } from 'url';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor( 
      public afDB: AngularFireDatabase,
      public afSG: AngularFireStorage
  ) {
  }

  getImagesDatabase(getImages) {
    this.afDB.list('Images/').snapshotChanges(['child_added']).subscribe(images => {
      images.forEach(image => {
        this.getImagesStorage(image, getImages);
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

  getImagesStorage(image: any, images: any) {
    const imgRef = image.payload.exportVal().ref;
    this.afSG.ref(imgRef).getDownloadURL().subscribe(imgUrl => {
      images.push({
        name: image.payload.exportVal().name,
        url: imgUrl
      });
    });
  }


}