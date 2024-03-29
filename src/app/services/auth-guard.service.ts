import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import * as firebase from 'firebase';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate{
  

  constructor(private router: Router) { }

  canActivate(): Observable<boolean> | Promise<boolean> | boolean{
    return new Promise(
      (resolve) => {
        firebase.auth().onAuthStateChanged(
          (user)=>{
            if(user){
              resolve(true);
            }else{
              this.router.navigate(['/login']);
              resolve(false);
            }
          }
        )
      }
    );

  }
}
