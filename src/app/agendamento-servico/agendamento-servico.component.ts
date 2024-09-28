import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../cliente.service';
@Component({
  selector: 'app-agendamento-servico',
  templateUrl: './agendamento-servico.component.html',
  styleUrls: ['./agendamento-servico.component.css']
})
export class AgendamentoServicoComponent implements OnInit {

  cliente = {
    nome: '',
    telefone: '',
    email: '',
    endereco: '',
    cep: '',
    complemento: '',
    ponto_referencia: ''
  };
  constructor(private clienteService: ClienteService) { }

  ngOnInit(): void {
  }
  
  onSubmit(): void {
    this.clienteService.adicionarCliente(this.cliente).subscribe(response => {
      console.log('Cliente adicionado:', response);
    });
  }
}
