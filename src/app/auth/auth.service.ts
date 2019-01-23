import { Injectable } from '@angular/core';
import {auth} from 'firebase';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  token : string = null;
  constructor(private router: Router) { }

  signin(username: string, password : string) {
    auth().signInWithEmailAndPassword(username, password).then(_ => {
      this.router.navigate(['./']);
      this.setToken();
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
    return this.token;
  }

  setToken() {
    auth().currentUser.getIdToken().then(token => this.token = token);
  }

  logOut() {
    auth().signOut();
    this.token = null;
  }

}
