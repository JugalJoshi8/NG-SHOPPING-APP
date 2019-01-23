import { Component, OnInit } from '@angular/core';
import {initializeApp} from 'firebase/app';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'NG-SHOPPING-SITE';
  ngOnInit() {
    initializeApp({
      apiKey: "AIzaSyDZf9hEkUJu5XEHnTHd7A8ZE4EI8vBFjkA",
      authDomain: "myshoppinglist-c674b.firebaseapp.com"
    });
  }
}
