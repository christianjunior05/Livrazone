import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { InscriptionLComponent } from './inscription-l/inscription-l.component';
import { ConnexionLComponent } from './connexion-l/connexion-l.component';
import { InscriptionCComponent } from './inscription-c/inscription-c.component';
import { ConnexionCComponent } from './connexion-c/connexion-c.component';
import { AccueilComponent } from './accueil/accueil.component';
import { AboutComponent } from './about/about.component';
import { FooterComponent } from './footer/footer.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { FindDeliveryComponent } from './find-delivery/find-delivery.component';
import { DeliveryAreaComponent } from './delivery-area/delivery-area.component';
import { DashboardAdminComponent } from './dashboard-admin/dashboard-admin.component';
import { SidebarComponent } from './sidebar/sidebar.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    InscriptionLComponent,
    ConnexionLComponent,
    InscriptionCComponent,
    ConnexionCComponent,
    AccueilComponent,
    AboutComponent,
    FooterComponent,
    PageNotFoundComponent,
    FindDeliveryComponent,
    DeliveryAreaComponent,
    DashboardAdminComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
