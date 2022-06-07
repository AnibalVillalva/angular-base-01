import { Component } from "@angular/core";

@Component({
  selector: 'app-counter',
  template: `
    <h1>{{ title }}</h1>
    <h3>La bvase es: <strong>{{base}}</strong></h3>
    <button (click)="add(base)"> +{{base}} </button>
    <span>{{ n }}</span>
    <button (click)="add(-base)"> -{{base}} </button>

  `

})
export class CounterComponent{
  title = 'Counter App';
  n: number = 0;
  base: number = 5;

  add(a: number){
    this.n += a;
  }
}
