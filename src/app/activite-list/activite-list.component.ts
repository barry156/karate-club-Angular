import { Component,OnInit } from '@angular/core';
import {Membre} from "../models/membre.model";
import{employee} from "../models/membre.model"
import{AppService} from "../services/app.service";
import{activite} from "../models/activite.model";

@Component({
  selector: 'app-activite-list',
  templateUrl: './activite-list.component.html',
  styleUrls: ['./activite-list.component.scss']
})
export class ActiviteListComponent {
  activites!:activite[];
  constructor(private MembresService:AppService) {}
  ngOnInit():void {

    this.activites=this.MembresService.getAllActivities();


  }


}
