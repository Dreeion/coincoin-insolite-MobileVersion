import { Component, OnInit } from '@angular/core';
import { Map, latLng, tileLayer, Layer, marker } from 'leaflet';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { LeafletService} from '../../services/leafletService/leaflet-service.service'
import { PhotoService } from '../../services/photoService/photo.service'
import { FirebaseService } from '../../services/firebaseService/firebase-service.service'

@Component({
  selector: 'app-map',
  templateUrl: './map.page.html',
  styleUrls: ['./map.page.scss'],
})



export class MapPage {

  constructor(
    private camera: Camera,
    private leafLetService: LeafletService,
    private photoService: PhotoService,
    private firebaseService:FirebaseService
    ) {
    sourceType: this.camera.PictureSourceType.CAMERA;
   }
 

  image: any = '';

  ionViewDidEnter() { 
    this.leafletMap(); 
  }

  leafletMap() {
    // In setView add latLng and zoom
    
    this.leafLetService.generateMap()
    
  }

  /** Remove map when we have multiple map object */
  ionViewWillLeave() {
    this.leafLetService.map.remove();
    this.leafLetService.initGMarker();
  }

  takePicture() {
    this.photoService.selectImage()
  }
}

