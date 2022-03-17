import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  
  login: string = 'Admin';
  password: string = '12345';

  loginError:boolean = false;

  constructor(private route: Router, private auth: AuthService) {}

  ngOnInit(): void {}

  loginSubmit() {
    if (this.login === 'Admin' && this.password === '12345') {
      console.log(this.login, this.password);
      localStorage.setItem('auth', 'true');
      this.auth.login();
      this.route.navigate(['/news']);
    } else {
      this.loginError = true;
      setTimeout(()=>{
        this.loginError = false;
      } ,10000)
    }
  }
}
