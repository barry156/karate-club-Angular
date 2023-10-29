import { Component, OnInit } from '@angular/core';

import{Membre} from "./models/membre.model";
import{employee} from "./models/membre.model";
import {activite} from "./models/activite.model";
import{AppService} from "./services/app.service";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers:[AppService],
})
export class AppComponent implements OnInit {

  ngOnInit() {
  }

}
