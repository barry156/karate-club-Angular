
import { Component,OnInit,Input } from '@angular/core';
import {Router} from "@angular/router";
import{employee} from "../models/membre.model";
import{Membre} from "../models/membre.model";

import {AppService} from "../services/app.service";

@Component({
  selector: 'app-employee',
  templateUrl:'./employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {
  employee2: employee[] | any;

  //@Input() employee!:employee;
  buttonLabel!: string;
  searchtext:any

  constructor(private MembresService:AppService, private router: Router) {
  }

  ngOnInit(): void {
    this.buttonLabel = 'Like';
    this.employee2=this.MembresService.getAllEmployes();
  }


  //ceci represente les methodes des employees
  /*onLikes() {
    if (this.buttonLabel == 'Like') {
      this.MembresService.likeEpisodeByIds(this.employee.id, 'like');
      this.buttonLabel = 'Unlike';
    } else {
      this.MembresService.likeEpisodeByIds(this.employee.id, 'unlike');
      this.buttonLabel = 'Like';
    }
  }
  onDetailEpisodes() {
    this.router.navigateByUrl('employees/'+this.employee.id);
  }*/


}

