import { Component } from '@angular/core';


@Component({
  selector: 'app-header1',
  templateUrl: './header1.component.html',
  styleUrls: ['./header1.component.scss']
})
export class Header1Component {



  myfunction() {
    let x = document.getElementById("myTopnav");

    // @ts-ignore
    if (x.className === "topnav") {

      // @ts-ignore
      x.className += " responsive";
    } else {

      // @ts-ignore
      x.className = "topnav";
    }
  }
    secnd () {
      // @ts-ignore
      document.getElementById("myTopnav").className ="topnav";

    }





}
