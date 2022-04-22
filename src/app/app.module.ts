import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { routing } from './app.routing';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

import { UsersService } from './users.service';

@NgModule({
  declarations: [AppComponent, UsersComponent, LoginComponent, RegisterComponent],
  imports: [BrowserModule, routing, FormsModule, HttpClientModule],
  providers: [UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }