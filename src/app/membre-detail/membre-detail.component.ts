import { Component,Input,OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {Membre} from "../models/membre.model";
import {AppService} from "../services/app.service";
import {ActivatedRoute} from "@angular/router";




@Component({
  selector: 'app-membre-detail',
  templateUrl: './membre-detail.component.html',
  styleUrls: ['./membre-detail.component.scss']
})
export class MembreDetailComponent {
  @Input() membre!: Membre;
  buttonLabel!: string;

  constructor(private membreService: AppService,
              private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    const membreid = +this.route.snapshot.params['id'];
    this.membre= this.membreService.getMembreById(membreid);
    this.buttonLabel = 'Like';
  }




}



