import { Injectable } from '@angular/core';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  createNewUser(email: string, password: string) {
    return new Promise(
      // tslint:disable-next-line:no-shadowed-variable
      (resolve, reject) => {
        firebase.auth().createUserWithEmailAndPassword(email, password).then(
          () => {
            resolve(true);
          },
          // tslint:disable-next-line:no-shadowed-variable
          (error) => {
            reject(error);
          }
        );
      }
    );
  }

  signInUser(email: string, password: string) {
    return new Promise(
      (resolve, reject) => {
        firebase.auth().signInWithEmailAndPassword(email, password).then(
          () => {
            resolve(true);
          },
          // tslint:disable-next-line:no-shadowed-variable
          (error) => {
            reject(error);
          }
        );
      }
    );
  }

  signInUserWithGmail() {
    return new Promise(
      (resolve, reject) => {
        firebase.auth().signInWithPopup(new firebase.auth.GoogleAuthProvider()).then(
          () => {
            resolve(true);
          },
          // tslint:disable-next-line:no-shadowed-variable
          (error) => {
            reject(error);
          }
        );
      }
    );
  }


  resetPassword(email: string) {
    const auth = firebase.auth();
    return auth.sendPasswordResetEmail(email)
      .then(() => console.log('email sent'))
      .catch((error) => console.log(error));
  }

  signOutUser() {
    firebase.auth().signOut();
  }
}
