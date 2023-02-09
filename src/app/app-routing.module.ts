import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { LoginComponent } from './Components/login/login.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { RegistrationComponent } from './Components/registration/registration.component';
import { TransactionComponent } from './Components/transaction/transaction.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent
  },
  {
    path: 'transaction', component:TransactionComponent
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'register', component: RegistrationComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
