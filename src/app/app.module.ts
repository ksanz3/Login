import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { routing } from './app.routing';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UsersComponent } from './users/users.component';

import { UsersService } from './users.service';
import { CookieService } from 'ngx-cookie-service';

@NgModule({
  declarations: [AppComponent, UsersComponent, LoginComponent, RegisterComponent, HomeComponent],
  imports: [BrowserModule, routing, FormsModule, HttpClientModule],
  providers: [CookieService, UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }