import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Calculadora Basiquísima';
  num1: number;
  num2: number;
  resultado: number;

  constructor() {
    this.num1 = 0;
    this.num2 = 0;
    this.resultado = 0;

  }

  sumar() {
    this.resultado = this.num1 + this.num2;
  }

  restar() {
    this.resultado = this.num1 - this.num2;
  }

  multiplicar() {
    this.resultado = this.num1 * this.num2;
  }

  dividir() {
    if (this.num2 == 0) {
      this.resultado = Number("Error");
    } else {
      this.resultado = this.num1 / this.num2;
    }
  }

}
