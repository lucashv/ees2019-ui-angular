import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { ClienteService } from 'src/app/service/cliente.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-cliente-form',
  templateUrl: './cliente-form.component.html',
  styleUrls: ['./cliente-form.component.scss']
})
export class ClienteFormComponent implements OnInit {

  clienteForm = new FormGroup({
    id: new FormControl(''),
    cpf: new FormControl(''),
    nome: new FormControl(''),
    sobrenome: new FormControl(''),
    email: new FormControl(''),
    senha: new FormControl('')
  });

  constructor(
    private router: Router,
    private clienteService: ClienteService,
    private messageService: MessageService
  ) { }

  ngOnInit() {
  }

  onSubmitForm() {
    const clienteDto = {
      id: this.clienteForm.get('id').value === '' ? null : this.clienteForm.get('id').value,
      cpf: this.clienteForm.get('cpf').value,
      nome: this.clienteForm.get('nome').value,
      sobrenome: this.clienteForm.get('sobrenome').value,
      email: this.clienteForm.get('email').value,
      senha: this.clienteForm.get('senha').value
    };
    this.clienteService.save(clienteDto).subscribe(
      ret => {
        this.messageService.add({severity: 'success', summary: 'Sucesso', detail: 'Cliente Salvo com sucesso!'});
        this.router.navigate(['/restricted/cliente']);
      },
      err => {
        this.messageService.add({severity: 'error', summary: 'Erro', detail: 'Houve um problema ao tentar salvar o Cliente!'});
      });
  }

}
