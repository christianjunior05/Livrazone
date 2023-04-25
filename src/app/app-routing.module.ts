import { DashboardAdminComponent } from './dashboard-admin/dashboard-admin.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutComponent } from './about/about.component';
import { AccueilComponent } from './accueil/accueil.component';
import { ConnexionLComponent } from './connexion-l/connexion-l.component';
import { ConnexionCComponent } from './connexion-c/connexion-c.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { InscriptionCComponent } from './inscription-c/inscription-c.component';
import { InscriptionLComponent } from './inscription-l/inscription-l.component';
import { SidebarComponent } from './sidebar/sidebar.component';


const routes: Routes = [
  {path :"about" ,component : AboutComponent},
  {path :"accueil" ,component : AccueilComponent},
  {path :"" , component : AccueilComponent},
  {path :"connexion-l" , component: ConnexionLComponent},
  {path :"connexion-c" , component: ConnexionCComponent},
  {path : "**" , component: PageNotFoundComponent},
  {path : 'inscription-c' , component : InscriptionCComponent},
  {path : 'inscription-l' , component : InscriptionLComponent},
  {path : 'sidebar' , component : SidebarComponent},
  {path : 'dashboard-admin' , component: DashboardAdminComponent} 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
