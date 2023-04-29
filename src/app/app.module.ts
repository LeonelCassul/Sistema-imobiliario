import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { SobrenosComponent } from './sobrenos/sobrenos.component';
import { ContactoComponent } from './contacto/contacto.component';
import { ImoveisComponent } from './imoveis/imoveis.component';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { BannerComponent } from './banner/banner.component';
import { FooterComponent } from './footer/footer.component';
import { AnotherComponent } from './another/another.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    SobrenosComponent,
    ContactoComponent,
    ImoveisComponent,
    CadastrarComponent,
    BannerComponent,
    FooterComponent,
    AnotherComponent,
     ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
