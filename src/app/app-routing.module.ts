import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SoildetailsComponent } from './soildetails/soildetails.component';


const routes: Routes = [
  {path:"Details", component:SoildetailsComponent},
  {path:"", redirectTo:"/",pathMatch:"full"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
