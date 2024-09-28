import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChartComponent } from './chart/chart.component';
import { HeaderComponent } from './header/header.component';

const routes: Routes = [
  // {path:'header',component:HeaderComponent},
  {path:'chart',component:ChartComponent},
  {path:'header',component:HeaderComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
