import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    private router: Router,
    private loginService: LoginService
  ) { }

  ngOnInit() {
  }

  onLogin(): void {
    this.loginService.doLogin('admin', 'admin').subscribe(
      ret => {
        console.log('Login efetuado com sucesso. Token: ' + ret[0]);
        localStorage.setItem('TOKEN', ret[0]);
        this.router.navigate(['/restricted']);
      },
      err => {
        console.log('Houve um erro ao tentar realizar a autenticação. Erro: ' + err);
      }
    );
  }

}
