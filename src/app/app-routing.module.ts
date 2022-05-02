import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CountryComponent } from './country/country.component';
import { DetailsComponent } from './details/details.component';


const routes: Routes = [
  {path:'details/:name', component:DetailsComponent},
  {path:'country', component:CountryComponent},
  {path:'', redirectTo:'/country', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
