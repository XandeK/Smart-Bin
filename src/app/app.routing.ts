

 import { ModuleWithProviders } from '@angular/core';
 import { Routes, RouterModule } from '@angular/router';
 
 //import home components
 import { LoginComponent } from './login/login.component';
 import { SignupComponent } from './signup/signup.component';
 import { CleanerComponent } from './cleaner/cleaner.component';
 import { ManagerComponent } from './manager/manager.component';

 
 //import { AuthGuard } from './auth.guard';
 
 const appRoutes: Routes = [
  { path: 'Login', component: LoginComponent },
  { path: 'Signup', component: SignupComponent},
  { path: 'Cleaner', component: CleanerComponent },
  { path: 'Manager', component: ManagerComponent }, 

 
 
 
  //code to redirect to "COMPONENT" on page load
 { path: '', component: LoginComponent, pathMatch: 'full'}
  
 ];
 export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
 
  