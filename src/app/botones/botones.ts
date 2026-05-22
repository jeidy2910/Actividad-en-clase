import { Component } from '@angular/core';

@Component({
  selector: 'app-botones',
  standalone: false,
  templateUrl: './botones.html',
  styleUrl: './botones.scss',
})
export class Botones {
  @Output() colorSeleccionado = new EventEmitter<string>();
  
  // Método para emitir el color seleccionado
  seleccionarColor(color: string) {
    this.colorSeleccionado.emit(color);
  }
}
