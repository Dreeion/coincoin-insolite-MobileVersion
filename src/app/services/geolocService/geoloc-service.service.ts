import { Injectable } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';

@Injectable({
  providedIn: 'root'
})
export class GeolocService {

  constructor(
    private geolocation: Geolocation
  ) { }

  currentPosition() : Promise<any>{
    return new Promise(resolve => { 
    this.geolocation.getCurrentPosition().then((resp) => {
      var data = {
        lat : resp.coords.latitude,
        long : resp.coords.longitude
      }
      resolve(data)
     }).catch((error) => {
       console.log('Error getting location', error);
     });
    })
  }

}
