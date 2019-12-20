import { Component, OnInit } from '@angular/core';
import { Map, latLng, tileLayer, Layer, marker } from 'leaflet';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { PhotoService } from '../photo-service.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-carte',
  templateUrl: './carte.page.html',
  styleUrls: ['./carte.page.scss'],
})



export class CartePage implements OnInit { 
  map: Map;
  points:  any;
 

  leafletMap() {
    // In setView add latLng and zoom
    this.map = new Map('map', {
      minZoom: 3,
      maxZoom: 17
  }).setView([28.644800, 77.216721], 10);
    tileLayer('http://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}', {
      attribution: 'edupala.com © ionic LeafLet',
    }).addTo(this.map);


    var size = this.points.length
    for (let i = 0; i < size; i++) {
      var latitude = this.points[i].latitude
      var longitude = this.points[i].longitude
      var desc = this.points[i].date
      marker([latitude, longitude]).addTo(this.map)
      .bindPopup(desc)
      .openPopup();
      
    }
    
  }

  /** Remove map when we have multiple map object */
  ionViewWillLeave() {
    this.map.remove();
  }

  constructor(private camera: Camera, public PhotoProvider: PhotoService) {
    sourceType: this.camera.PictureSourceType.CAMERA
    PhotoProvider.points.phpdata().then(response =>  {
      this.points = JSON.parse(JSON.stringify(response)).records;
  }
);
   }

  ngOnInit() {
  }


  image:any=''
  
  openCam(){
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }
    
    this.camera.getPicture(options).then((imageData) => {
     // imageData is either a base64 encoded string or a file URI
     // If it's base64 (DATA_URL):
     //alert(imageData)
     this.image=(<any>window).Ionic.WebView.convertFileSrc(imageData);
    }, (err) => {
     // Handle error
     alert("error "+JSON.stringify(err))
    });

  }

 

  ionViewDidEnter() { this.leafletMap(); }
  
}

