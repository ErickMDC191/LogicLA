import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../cliente.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {
  listaClientes: any[] = [];
  clientesMaioresDe60: any[] = []; 
  mostrarDetalhes: boolean = false;

  constructor(private clienteService: ClienteService) {}

  toggleDetails() {
    this.mostrarDetalhes = !this.mostrarDetalhes;
  }

  buscarClientesMaioresDe60(): void {
    this.clientesMaioresDe60 = this.listaClientes.filter((cliente) => cliente.idade > 60);
  }

  ngOnInit(): void {
    this.clienteService.buscarClientes().subscribe((clientes: any) => {
      this.listaClientes = clientes;
      
      this.clientesMaioresDe60 = this.listaClientes;
    });
  }

  excluirCliente(clienteId: number): void {
    this.clienteService.excluirCliente(clienteId).subscribe(() => {
      this.listaClientes = this.listaClientes.filter((cliente) => cliente.id !== clienteId);
      this.buscarClientesMaioresDe60(); 
    });
  }
}
