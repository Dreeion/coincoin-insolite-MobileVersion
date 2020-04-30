import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(
  ){
  }

  getCurrentUserId() {
    return firebase.auth().currentUser.uid
  }

}
