import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pepitooooo';
  constructor(public auth: AuthService) {}
  botonapretado(){
    console.log("botonapretado");
    this.auth.googleSignin();
  }
  
}
