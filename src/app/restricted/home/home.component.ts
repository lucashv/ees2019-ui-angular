import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Router } from '@angular/router';
import { AuthGuard } from 'src/app/auth/auth.guard';
import { homeDefaultAnimation } from 'src/app/utils/animations';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    homeDefaultAnimation
  ]
})
export class HomeComponent implements OnInit {

  menuItems: MenuItem[];

  constructor(
    private router: Router,
    private auth: AuthGuard
  ) { }

  ngOnInit() {
    this.menuItems = [
      {
        label: 'Pedidos',
        items: [
          { label: 'Novo Pedido', routerLink: 'pedido/form'},
          { label: 'Buscar Pedidos', routerLink: 'pedido' }
        ]
      },
      { label: 'Cliente', routerLink: 'cliente' },
      { label: 'Produto', routerLink: 'produto'  },
    ];
  }

  logout() {
    this.auth.logout();
    this.router.navigate(['/login']);
  }

}
