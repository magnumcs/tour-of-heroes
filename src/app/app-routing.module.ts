import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HeroesComponent} from './heroes/heroes/heroes.component';
import {HeroComponent} from './heroes/hero/hero.component';
import {HeroDetailComponent} from './heroes/hero-detail/hero-detail.component';
import {HomeComponent} from './home/home.component';
import {MainComponent} from './main/main.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', loadChildren: './login/login.module#LoginModule'},
  { path: '', component: MainComponent, children: [
      { path: 'home', component: HomeComponent },
      { path: 'heroes', component: HeroesComponent },
      { path: 'heroes/hero', component: HeroComponent },
      { path: 'detail/:id', component: HeroDetailComponent },
    ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
