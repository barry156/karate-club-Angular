import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";




import {MembreListComponent} from "./membre-list/membre-list.component";
import {MembreDetailComponent} from "./membre-detail/membre-detail.component";
import {CarousselComponent} from "./caroussel/caroussel.component";
import {EmployeeComponent} from "./employee/employee.component";

import {ListepersonnelComponent} from "./listepersonnel/listepersonnel.component";
import {InscriptionComponent} from "./inscription/inscription.component";
import {ContactComponent} from "./contact/contact.component";
import {ActiviteListComponent} from "./activite-list/activite-list.component";
import {PartenaireComponent} from "./partenaire/partenaire.component";


const routes:Routes = [
  {path: 'membres', component:MembreListComponent},
  {path: '', component: CarousselComponent},

  {path: 'membres/:id', component: MembreDetailComponent},

  {path: 'employees', component: ListepersonnelComponent},
  {path: 'inscription', component: InscriptionComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'activite', component: ActiviteListComponent},
  {path: 'partenaire', component: PartenaireComponent},

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule {}
