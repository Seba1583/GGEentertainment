import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { GamesComponent } from './games/games.component';
import { MainComponent } from './main/main.component';

const routes: Routes = [
  {path: '', component: MainComponent, data: {animation: '0'}},
  {path: 'about', component: AboutComponent, data: {animation: '1'}},
  {path: 'games', component: GamesComponent, data: {animation: '2'}},
  {path: 'contact', component: ContactComponent, data: {animation: '3'}},
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
