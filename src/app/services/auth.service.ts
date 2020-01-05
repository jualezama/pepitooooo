import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { User } from './user.model';
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { auth } from 'firebase';
import { async } from 'rxjs/internal/scheduler/async';
import { NewType } from './NewType';


@Injectable({ providedIn: 'root' })
export class AuthService {
    [x: string]: any;
    user$: Observable<NewType>;    

    constructor(
        private afAuth: AngularFireAuth,
        private afs: AngularFirestore,
        private router: Router
    ) { 
        this.user$ = this.afAuth.authState.pipe(
            switchMap(user => {
                if (user) {
                    return this.afs.doc<User>(`User/${user.uid}`).valueChanges();                     
                }   else {
                    return of(null);
                }

            })
        );
    }
    async googleSignin() {
        const provider = new auth.GoogleAuthProvider();
        const credential = await this.afAuth.auth.signInWithPopup(provider);
        return this.updateUserdata(credential.user);       

    }

    async signOut(){
        await this.afAuth.auth.signOut();
        return this.router.navigate(['/']);
    }

    private updateUserdata(user) {
        const userRef: AngularFirestoreDocument<User> = this.afs.doc(`users/${user.uid}`);
        const  data = {
            uid: user.uid,
            email: user.email,
            displayName: user.displayName,
            photoURL: user.photoURL
        };

        return userRef.set(data, {merge : true});

    }
}
