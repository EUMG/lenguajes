import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LenguajeNoviaComponent } from './components/lenguaje-novia/lenguaje-novia.component';
import { GatiboComponent } from './components/gatibo/gatibo.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path: 'novia', component: LenguajeNoviaComponent},
  {path: 'gatibo', component: GatiboComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
