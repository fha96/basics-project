import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showR: boolean = true ;
  showL: boolean ;
  
  
  
  navigateDetector(payload: {showR: boolean, showL: boolean}){
    console.log(payload);
    // console.log(this.navigator);
      this.showL = payload.showL;
      this.showR = payload.showR
  }
}
