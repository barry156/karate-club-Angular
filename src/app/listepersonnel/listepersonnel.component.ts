import { Component,OnInit } from '@angular/core';
import {Membre} from "../models/membre.model";
import{employee} from "../models/membre.model"
import{AppService} from "../services/app.service";
import { SearchPipe } from "../search.pipe";

@Component({
  moduleId:module.id,
  selector: 'app-listepersonnel',
  templateUrl: './listepersonnel.component.html',
  styleUrls: ['./listepersonnel.component.scss'],



})
export class ListepersonnelComponent {
  //searchtext:any




  employees!:employee[];
  constructor(private MembresService:AppService) {}
  ngOnInit():void {

    this.employees=this.MembresService.getAllEmployes();


  }

}
