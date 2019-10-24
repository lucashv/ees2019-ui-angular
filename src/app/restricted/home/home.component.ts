import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Router } from '@angular/router';
import { AuthGuard } from 'src/app/auth/auth.guard';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  menuItems: MenuItem[];

  constructor(
    private router: Router,
    private auth: AuthGuard
  ) { }

  ngOnInit() {
    this.menuItems = [
      { label: 'Cliente' },
      { label: 'Pedido' },
      { label: 'Produto' },
    ];
  }

  logout() {
    this.auth.logout();
    this.router.navigate(['/login']);
  }

}
