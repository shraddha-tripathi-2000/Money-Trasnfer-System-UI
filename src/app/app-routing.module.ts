import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { RegistrationComponent } from './Components/registration/registration.component';

const routes: Routes = [
  {
    path:'',
  component:RegistrationComponent
  
}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
