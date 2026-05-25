import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-botones',
  standalone: false,
  templateUrl: './botones.html',
  styleUrl: './botones.scss',
})
export class Botones {
    @Output() colorSeleccionado = new EventEmitter<string>();

  colores = [
    { nombre: 'Rojo', valor: 'red' },
    { nombre: 'Verde', valor: 'green' },
    { nombre: 'Azul', valor: 'blue' },
    { nombre: 'Amarillo', valor: 'gold' }
  ];

  cambiarColor(color: string) {
    this.colorSeleccionado.emit(color);
  }
}
