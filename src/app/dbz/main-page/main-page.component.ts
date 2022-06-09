import { Component, OnInit } from '@angular/core';
import { Character } from '../interfaces/dbz.interfaces';


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

  addNewCharacter(character: Character){
    console.log(character);
    this.listCharacter.push(character);
    console.log( this.listCharacter );
  }
  }
