// app.routing.ts
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const appRoutes = [
    { path: "", component: AppComponent, pathMatch: "full" },
    { path: 'users', component: UsersComponent,  pathMatch: 'full'},
    { path: "login", component: LoginComponent, pathMatch: "full" },
    { path: "register", component: RegisterComponent, pathMatch: "full" }
];
export const routing = RouterModule.forRoot(appRoutes);