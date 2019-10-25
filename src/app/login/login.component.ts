import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../service/login.service';
import { AppSettings } from '../utils/AppSettings';
import { AuthGuard } from '../auth/auth.guard';
import { FormGroup, FormControl } from '@angular/forms';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  formLogin = new FormGroup({
    username: new FormControl(''),
    password: new FormControl('')
  });

  constructor(
    private router: Router,
    private loginService: LoginService,
    private auth: AuthGuard,
    private messageService: MessageService
  ) { }

  ngOnInit() {
  }

  onLogin(): void {
    console.log('Tentando logar...');
    this.loginService.login(
      this.formLogin.controls.username.value,
      this.formLogin.controls.password.value).subscribe(
      resp => {
        console.log(resp.headers.get('status'));
        if (resp === null || resp === undefined || resp.headers === null) {
          this.messageService.add({severity: 'error', summary: 'Falhou', detail: 'Sem retorno do servidor'});
          return;
        }
        this.auth.setLoginToken(resp.headers.get(AppSettings.authorizationHeader));
        this.router.navigate(['/restricted']);
      },
      err => {
        console.log(err);
        if (err.status === 403) {
          this.messageService.add({severity: 'error', summary: 'Falhou', detail: 'Usuário ou senha incorretos'});
        } else {
          this.messageService.add({severity: 'error', summary: 'Erro', detail: 'Houve um erro ao tentar entrar no sistema'});
        }
      }
    );
  }

}
