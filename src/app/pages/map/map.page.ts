import { Component, OnInit } from '@angular/core';
import { Map, latLng, tileLayer, Layer, marker } from 'leaflet';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { LeafletService} from '../../services/leafletService/leaflet-service.service'


@Component({
  selector: 'app-map',
  templateUrl: './map.page.html',
  styleUrls: ['./map.page.scss'],
})



export class MapPage implements OnInit {

  constructor(
    private camera: Camera,
    private leafLetService: LeafletService) {
    sourceType: this.camera.PictureSourceType.CAMERA;
   }
 

  image: any = '';

  ionViewDidEnter() { this.leafletMap(); }

  leafletMap() {
    // In setView add latLng and zoom
    
    this.leafLetService.generateMap()
    
  }

  /** Remove map when we have multiple map object */
  ionViewWillLeave() {
    this.leafLetService.map.remove();
  }

  ngOnInit() {
  }

  openCam() {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    };

    this.camera.getPicture(options).then((imageData) => {
     // imageData is either a base64 encoded string or a file URI
     // If it's base64 (DATA_URL):
     // alert(imageData)
     this.image = ( window as any).Ionic.WebView.convertFileSrc(imageData);
    }, (err) => {
     // Handle error
     alert('error ' + JSON.stringify(err));
    });

  }

}

