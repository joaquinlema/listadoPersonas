import {  Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { Router } from '@angular/router';

@Injectable()
export class LoginService {
    token: string;

  constructor(private router: Router) {

  }

    login(email: string, pass: string) {
      firebase.auth().signInWithEmailAndPassword(email, pass).
        then(
          response => {
            firebase.auth().currentUser.getIdToken().
            then(
              token => {
                this.token = token;
                this.router.navigate(['/']);
              }
            );
          }
        );
    }

    getIdToken() {
      return this.token;
    }

    isAutenticado() {
      return this.token != null;
    }

    onLogout() {
      firebase.auth().signOut()
      .then( () => {
        this.token = null;
        this.router.navigate(['login']);
      })
      .catch( error => {
        console.log(error);
      });
    }
}
