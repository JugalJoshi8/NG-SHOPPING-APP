import { Injectable } from '@angular/core';
import {auth} from 'firebase';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  signin(username: string, password : string) {
    auth().signInWithEmailAndPassword(username, password).then(res => {
      console.log(res);
    }).catch(_ => {
      console.log('error occurred');
    });;
  }

  signup(username: string, password : string) {
    auth().createUserWithEmailAndPassword(username, password).then(_ => {
      console.log('user created');
    }).catch(_ => {
      console.log('error occurred');
    });
  }

  getToken() {
    return auth().currentUser.getIdToken();
  }
}
