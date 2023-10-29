
import { Component,OnInit,Input } from '@angular/core';
import {Router} from "@angular/router";
import{employee} from "../models/membre.model";

import {Membre} from "../models/membre.model";

import {AppService} from "../services/app.service";

@Component({
  selector: 'app-membre',
  templateUrl: './membre.component.html',
  styleUrls: ['./membre.component.scss']
})
export class MembreComponent implements OnInit {
  @Input() membre!: Membre;

  buttonLabel!: string;

  constructor(private MembresService: AppService, private router: Router) {
  }

  ngOnInit(): void {
    this.buttonLabel = 'Like';
  }

  /*onLike() {
    if (this.buttonLabel == 'Like') {
      this.MembresService.likeEpisodeById(this.membre.id, 'like');
      this.buttonLabel = 'Unlike';
    } else {
      this.MembresService.likeEpisodeById(this.membre.id, 'unlike');
      this.buttonLabel = 'Like';
    }
  }*/

  onDetailEpisode() {
    this.router.navigateByUrl('membres/' + this.membre.id);
  }
}
