import { Component, OnInit } from '@angular/core';

interface Character {
  name: string,
  power: number
}
@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {

  listCharacter: Character[] = [
    {
      name: "Goku",
      power: 15000
    },
    {
      name: "Vegeta",
      power: 7500
    }
  ]
  newCharacter: Character = {
    name:"",
    power:0
  }

  addCharacter() {
    if (this.newCharacter.name.trim().length != 0){

      console.log(this.newCharacter);
      this.listCharacter.push(this.newCharacter);
      this.newCharacter.name = "";
      this.newCharacter.power = 0;

    }

  }
}
