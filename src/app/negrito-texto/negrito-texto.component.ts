import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-negrito-texto',
  templateUrl: './negrito-texto.component.html',
  styleUrls: ['./negrito-texto.component.css']
})
export class NegritoTextoComponent {
  @Input()
  texto!: string;
}
