import {Component, OnInit,Input} from '@angular/core';
import {activite} from "../models/activite.model";
import {employee, Membre} from "../models/membre.model";
import {AppService} from "../services/app.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  videos=[""]




  constructor(private MembresService:AppService, private router: Router) {
  }



}
