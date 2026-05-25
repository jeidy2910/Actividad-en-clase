import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pantalla',
  standalone: false,
  templateUrl: './pantalla.html',
  styleUrl: './pantalla.scss',
})
export class Pantalla {
 @Input() colorCuadrado: string = 'gray'; 
}
