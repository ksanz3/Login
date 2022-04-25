import { Component, OnChanges, OnDestroy, OnInit, SimpleChanges} from '@angular/core';
import { UsersService } from '../users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnChanges, OnDestroy {
  email!: string;
  password!: string;

  ngOnDestroy(): void {
    console.log('Destroy')
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('Changes')
  }
  ngOnInit(): void {
  }

  constructor(public userService: UsersService, public router: Router) { }

   login() {
    const user = {email: this.email, password: this.password};
    this.userService.login(user).subscribe( data => {
      this.userService.setToken(data.token);
      this.router.navigateByUrl('/users');
    });
  }
}
