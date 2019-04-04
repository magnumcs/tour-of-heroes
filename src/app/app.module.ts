import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes/heroes.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { MenuComponent } from './menu/menu.component';
import { HeroComponent } from './heroes/hero/hero.component';
import { HomeComponent } from './home/home.component';
import { HeroDetailComponent } from './heroes/hero-detail/hero-detail.component';
import {HeroService} from './heroes/hero.service';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {AngularFontAwesomeModule} from 'angular-font-awesome';
import { FooterComponent } from './footer/footer.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { ModalComponent } from './modal/modal.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    NavbarComponent,
    MenuComponent,
    HeroComponent,
    HomeComponent,
    HeroDetailComponent,
    FooterComponent,
    ModalComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFontAwesomeModule,
    NgxPaginationModule
  ],
  providers: [HeroService, HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
