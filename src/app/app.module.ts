import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { SuperSecretComponent } from './super-secret/super-secret.component';
const firebaseConfig = {
  apiKey: "AIzaSyDNB7ereIo6rm0IU7R_PZAsD7yFbtb_yRM",
  authDomain: "thinking-leaf-263021.firebaseapp.com",
  databaseURL: "https://thinking-leaf-263021.firebaseio.com",
  projectId: "thinking-leaf-263021",
  storageBucket: "thinking-leaf-263021.appspot.com",
  messagingSenderId: "927821916968",
  appId: "1:927821916968:web:88b1e7de5485d3f1cd3e1d",
  measurementId: "G-V4F68PFKFB"
};/* your firebase web config */


@NgModule({
  declarations: [
    AppComponent,
    UserProfileComponent,
    SuperSecretComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
    AngularFireAuthModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
