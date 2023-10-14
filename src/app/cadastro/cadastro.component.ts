import { Component } from '@angular/core';
import { ClienteService } from '../cliente.service'; 

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent {
  cliente: any = {
    nome: '',
    sobrenome: '',
    cpf: '',
    idade: 0,
    endereco: ''
  };

  constructor(public clienteService: ClienteService) {} 

  salvarCliente() {
    
    this.clienteService.cadastrarCliente(this.cliente).subscribe(
      (response) => {
        console.log('Cliente salvo com sucesso!', response);
        
      },
      (error) => {
        console.error('Erro ao salvar o cliente:', error);
    
      }
    );
  }

  cadastrarCliente(cliente: any) {
    this.clienteService.cadastrarCliente(cliente).subscribe(
      (response) => {
        console.log('Cliente cadastrado com sucesso!', response);
      
      },
      (error) => {
        console.error('Erro ao cadastrar o cliente:', error);
      
      }
    );
}
}


