import { Component,OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {map, Observable} from "rxjs";
import {Membre} from "../models/membre.model";

import {AppService} from "../services/app.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.scss']
})
export class InscriptionComponent {
  membreForm!: FormGroup;
  membrepreview$!: Observable<Membre>;

  constructor(private formBuilder: FormBuilder,
              private membreservice: AppService,
              private router: Router) { }

  ngOnInit(): void {
    this.membreForm = this.formBuilder.group({
      title: [null, [Validators.required]],
      dateofbirth: [null, [Validators.required]],
      status: [null, [Validators.required]],
      email: [null ,[Validators.required]],
      ceinture: [null, [Validators.required]],

      afficheUrl: [null],
    },{
      updateOn: 'blur'
    });
    this.membrepreview$ = this.membreForm.valueChanges.pipe(
      map(formValue => ({
        ...formValue,
        id: 0,
        like: 0,
        note: 0
      }))
    );
  }

  onSubmitForm() {
    this.membreservice.addMembre(this.membreForm.value);
    this.router.navigateByUrl('/membres');
  }

}
