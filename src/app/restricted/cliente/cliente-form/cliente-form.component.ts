import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cliente-form',
  templateUrl: './cliente-form.component.html',
  styleUrls: ['./cliente-form.component.scss']
})
export class ClienteFormComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  cancelar() {
    this.router.navigate(['cliente']);
  }

}
