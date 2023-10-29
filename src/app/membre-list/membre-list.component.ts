import { Component,OnInit} from '@angular/core';
import{Membre} from "../models/membre.model"
import{employee} from "../models/membre.model"
import{AppService} from "../services/app.service";

@Component({
  selector: 'app-membre-list',
  templateUrl: './membre-list.component.html',
  styleUrls: ['./membre-list.component.scss']
})
export class MembreListComponent implements OnInit{
  membres!:Membre[];

  constructor(private MembresService:AppService) {}
  ngOnInit():void {
    this.membres=this.MembresService.getAllMembres();

  }

}
