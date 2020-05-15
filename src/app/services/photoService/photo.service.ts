import { Injectable } from '@angular/core';
import { Camera, CameraOptions, PictureSourceType} from '@ionic-native/camera/ngx';
import { ActionSheetController, ToastController, Platform } from '@ionic/angular';
import { FilePath } from '@ionic-native/file-path/ngx';
import { FirebaseService } from '../firebaseService/firebase-service.service';
@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  constructor(
    public actionSheetController: ActionSheetController,
    private camera: Camera,
    private plt: Platform,
    private filePath: FilePath,
    private firebase : FirebaseService
  ) { }


  async selectImage(){
    
    const actionSheet = await this.actionSheetController.create({
      
      header: "Sélectionner la source de l'image",
      buttons: [
        {
          text : "Ouvrir la bibliothèque",
          handler : ()=>{
              this.takePicture(this.camera.PictureSourceType.PHOTOLIBRARY).then(val => {
                //callback(val)
              })
          }
        },
        {
          text : "Ouvrir l'appareil photo",
          handler : ()=>{ 
              this.takePicture(this.camera.PictureSourceType.CAMERA).then(val => {
                console.log(val)
                this.firebase.uploadImage(val)
              })
          }
        },
        {
          text : "Annuler",
          role: "cancel",
          handler : ()=>{
          
          }
        }
      ]
    })
    await actionSheet.present()
    
  }

  takePicture(sourceType: PictureSourceType) : any{
    return new Promise ((resolve) => {
    var options: CameraOptions = {
      quality: 100,
      sourceType: sourceType,
      saveToPhotoAlbum: false,
      correctOrientation: true,
      destinationType: this.camera.DestinationType.DATA_URL
    }
    this.camera.getPicture(options).then(imagePath => {
      if (this.plt.is('android') && sourceType === this.camera.PictureSourceType.PHOTOLIBRARY) {
          this.filePath.resolveNativePath(imagePath)
              .then(filePath => {
                  let correctPath = filePath.substr(0, filePath.lastIndexOf('/') + 1);
                  let currentName = imagePath.substring(imagePath.lastIndexOf('/') + 1, imagePath.lastIndexOf('?'));
                  resolve(filePath)
                  //this.copyFileToLocalDir(correctPath, currentName, this.createFileName());
              });
      } else {
          var currentName = imagePath.substr(imagePath.lastIndexOf('/') + 1);
          var correctPath = imagePath.substr(0, imagePath.lastIndexOf('/') + 1);
          resolve(correctPath)
          //this.copyFileToLocalDir(correctPath, currentName, this.createFileName());
      }
    });
    })
  }
  
}
