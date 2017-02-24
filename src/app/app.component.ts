import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'app works!';
    valor1: number = 0;
    valor2: number = 0;
    valor3: number = 0;
    result;

    divide() {
        if (this.valor1 || this.valor2 || this.valor3) {
            this.result = 'não deu';
        }
        else {
            this.result = this.valor1 / this.valor2 / this.valor3 || 'não deu';
        }
    }

    multiplica() {
        this.result = this.valor1 * this.valor2 * this.valor3;
    }

    soma() {
        this.result = this.valor1 + this.valor2 + this.valor3;
    }
}
