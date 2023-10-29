import {Component, Input} from '@angular/core';

import {activite} from "../models/activite.model";
import {AppService} from "../services/app.service";

@Component({
  selector: 'app-activite',
  templateUrl: './activite.component.html',
  styleUrls: ['./activite.component.scss']
})
export class ActiviteComponent {
  @Input() activite!: activite;


  constructor(private appService: AppService) {
  }


}
