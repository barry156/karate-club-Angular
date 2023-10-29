import {DEFAULT_CURRENCY_CODE, LOCALE_ID, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import pour la localisation en fr
import {NgFor, registerLocaleData} from "@angular/common";
import {FormsModule} from "@angular/forms"
import * as fr from '@angular/common/locales/fr'


import { AppComponent } from './app.component';



//import {UserNotePipe} from "./shared/user-note.pipe";

import {AppRoutingModule} from "./app-routing.module";

import { Header1Component } from './header1/header1.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MainComponent } from './main/main.component';
import { FooterComponent } from './footer/footer.component';

import { MembreComponent } from './membre/membre.component';
import { MembreListComponent } from './membre-list/membre-list.component';
import { MembreDetailComponent } from './membre-detail/membre-detail.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CarousselComponent } from './caroussel/caroussel.component';
import { ListepersonnelComponent } from './listepersonnel/listepersonnel.component';
import { EmployeeComponent } from './employee/employee.component';

import { SearchPipe } from './search.pipe';
import { InscriptionComponent } from './inscription/inscription.component';
import {  ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from "@angular/material/form-field";
import { ContactComponent } from './contact/contact.component';
import {AppService} from "./services/app.service";
import { AccueilComponent } from './accueil/accueil.component';
import { ActiviteComponent } from './activite/activite.component';
import { ActiviteListComponent } from './activite-list/activite-list.component';
import { PartenaireComponent } from './partenaire/partenaire.component';







@NgModule({
  declarations: [
    AppComponent,





    Header1Component,
    SidebarComponent,
    MainComponent,
    FooterComponent,


    MembreComponent,
    MembreListComponent,
    MembreDetailComponent,
    CarousselComponent,
    ListepersonnelComponent,
    EmployeeComponent,

    SearchPipe,
    InscriptionComponent,
    ContactComponent,
    AccueilComponent,
    ActiviteComponent,
    ActiviteListComponent,
    PartenaireComponent,



  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatFormFieldModule,



  ],
  providers: [
    {provide: LOCALE_ID, useValue: 'fr-FR'},
    {provide: DEFAULT_CURRENCY_CODE, useValue: 'USD'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
    registerLocaleData(fr.default);
  }
}
