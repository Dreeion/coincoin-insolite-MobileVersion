import { Injectable } from '@angular/core';
import { FirebaseService } from '../firebaseService/firebase-service.service'
import { Map, latLng, tileLayer, Layer, marker,icon } from 'leaflet';

@Injectable({
  providedIn: 'root'
})
export class LeafletService {
  map: Map;

  
  constructor(
    private firebaseService: FirebaseService
  ) { }

  generateMap(){
    this.map = new Map('map', {
      minZoom: 3,
      maxZoom: 17
    }).setView([28.644800, 77.216721], 10);
      tileLayer('http://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}', {
      attribution: 'edupala.com © ionic LeafLet',
    }).addTo(this.map);

    this.getMarkersFromFirebase();
  }

  generateMarker(lat,long,image="",text=""){
    var mark = marker([lat, long],{icon: this.generateIconMarker(image)}).addTo(this.map)
    mark.bindPopup('Ionic 4 <br> Leaflet.')
    //mark.openPopup();
    mark.valueOf()._icon.style.borderRadius = "25px"
    mark.valueOf()._icon.style.border = "2px solid #2980B9"
    mark.valueOf()._icon.style.objectFit = "cover"
  }

  generateIconMarker(url){
    var markerIcon = new icon({
      iconUrl: url,
      shadowUrl: url,
      className : "leafMarker",
      iconSize:     [50, 50], // size of the icon
      shadowSize:   [0, 0], // size of the shadow
      iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
      shadowAnchor: [4, 62],  // the same for the shadow
      popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
    });
    return markerIcon
  }

  getMarkersFromFirebase() {
    this.firebaseService.getDataFromFirebase("Markers").then(val => {
      val.forEach(element => {
        this.generateMarker(element.lat, element.long, element.image)
      });
    });
  }

}
