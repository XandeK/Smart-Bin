import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { routing } from './app.routing';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http'
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { CleanerComponent } from './cleaner/cleaner.component';
import { ManagerComponent } from './manager/manager.component';
import { SignupComponent } from './signup/signup.component';

import { UbidotsService} from './ubidots.service'
import {AuthService} from './auth.service'

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CleanerComponent,
    ManagerComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    routing,
    HttpClientModule,
    HttpModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [AuthService, UbidotsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
