import { Component } from '@angular/core';

@Component({
  selector: 'app-pantalla',
  standalone: false,
  templateUrl: './pantalla.html',
  styleUrl: './pantalla.scss',
})
export class Pantalla {
 colorCuadrado: string = 'blueviolet'; // Color inicial del div2
  
  cambiarColor(color: string) {
    this.colorCuadrado = color;
  }
}
