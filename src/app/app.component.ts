import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
  //</span>'
})
export class AppComponent {
  title = 'Counter App';
  n: number = 0;

  add(a: number){
    this.n += a;
  }
}
