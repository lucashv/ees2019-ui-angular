import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../service/login.service';
import { AppSettings } from '../utils/AppSettings';
import { AuthGuard } from '../auth/auth.guard';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    private router: Router,
    private loginService: LoginService,
    private auth: AuthGuard
  ) { }

  ngOnInit() {
  }

  onLogin(): void {
    console.log('Tentando logar...');
    this.loginService.login('admin', 'admin').subscribe(
      resp => {
        if (resp === null || resp === undefined || resp.headers === null) {
          return;
        }
        console.log('Setando o token: ' + resp.headers.get(AppSettings.authorizationHeader));
        this.auth.setLoginToken(resp.headers.get(AppSettings.authorizationHeader));
        this.router.navigate(['/restricted']);
      },
      err => {
        console.log(err);
      }
    );
  }

}
