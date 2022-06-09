import { Injectable } from "@angular/core";
import { Character } from '../interfaces/dbz.interfaces';

@Injectable()
export class DbzService{

    private _listCharacter: Character[] = [
    {
      name: "Goku",
      power: 15000
    },
    {
      name: "Vegeta",
      power: 7500
    }
  ]

  get listCharacter(): Character[] {
    return [...this._listCharacter] // returned by value
  }

  addNewCharacter(character: Character){
    console.log(character);
    this._listCharacter.push(character);
    console.log( this._listCharacter );
  }

  constructor() {
    console.log('Service')
  }

}
