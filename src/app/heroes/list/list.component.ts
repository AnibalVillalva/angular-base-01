import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html'
})
export class ListComponent {
  heroes: string[] = ['Spiderman', 'IronMan', 'Hulk', 'Thor'];
  deletedHero: string = '...'
 /**
  * name
  */
 public deleteItemHero() {
   this.deletedHero = this.heroes.shift() || '';
 }

}


