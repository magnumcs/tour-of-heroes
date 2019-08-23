import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HeroesComponent} from './heroes/heroes/heroes.component';
import {HeroComponent} from './heroes/hero/hero.component';
import {HeroDetailComponent} from './heroes/hero-detail/hero-detail.component';
import {HomeComponent} from './home/home.component';
import {MainComponent} from './main/main.component';
import {HeroEditComponent} from './heroes/hero-edit/hero-edit.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule)},
  { path: '', component: MainComponent, children: [
      { path: 'home', component: HomeComponent },
      { path: 'heroes', component: HeroesComponent },
      { path: 'heroes/hero', component: HeroComponent },
      { path: 'detail/:id', component: HeroDetailComponent },
      { path: 'edit/:id', component: HeroEditComponent },
    ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
