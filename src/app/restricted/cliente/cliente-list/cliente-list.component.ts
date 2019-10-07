import { Component, OnInit } from '@angular/core';
import { ClienteService } from 'src/app/service/cliente.service';

@Component({
  selector: 'app-cliente-list',
  templateUrl: './cliente-list.component.html',
  styleUrls: ['./cliente-list.component.scss']
})
export class ClienteListComponent implements OnInit {

  constructor(private clienteService: ClienteService) { }

  ngOnInit() {
    this.clienteService.getAll().subscribe((data) => {
      console.log(data);
    });
  }

}
