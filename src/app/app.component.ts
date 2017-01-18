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
    result: number = 0;

    divide() {
        this.result = this.valor1 / this.valor2;
    }
}
