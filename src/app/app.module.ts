import { routing } from './app.routing';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

@NgModule({
  declarations: [AppComponent, UsersComponent, LoginComponent, RegisterComponent],
  imports: [BrowserModule, routing, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }