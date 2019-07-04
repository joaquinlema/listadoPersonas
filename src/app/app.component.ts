import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { LoginService } from './login/login.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private loginService: LoginService) {}

  ngOnInit(): void {
      firebase.initializeApp({
        apiKey: 'AIzaSyDf9urv5uEBaVioGVYinKYr5P-usdTorXs',
        authDomain: 'app-listado-personas-64fad.firebaseapp.com',
      });
  }

  isAutenticado() {

  }

  onSalir() {

  }

}
