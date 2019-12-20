import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class PhotoService {
  infos: any;
  apiUrl = 'http://lusty.fr/api/product/read.php';
  points: any;

  constructor(public http: HttpClient) {
    
    
    this.points = {
      phpdata: () : Promise<any> => {
          return this.http.get(this.apiUrl).pipe(map(data => {             
              return data;
          })).toPromise();
      },
    }

  }

 /* getPhoto2() {
    this.points = this.http.get(this.apiUrl+'/product/read.php').map((res1: Response) => res1.json())
    .subscribe(res2 => {
      console.log('response :'+ res2);
      Promise.resolve(res2.data);
    }, (err) => {
      Promise.reject(err);
    });
  } */

  getPhoto() {
     
  }


}
