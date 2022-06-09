import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../interfaces/dbz.interfaces';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-add-character',
  templateUrl: './add-character.component.html',
  styleUrls: ['./add-character.component.css']
})

export class AddCharacterComponent {

  @Input() newCharacter: Character = {
    name:'',
    power:0
  }

  // @Output() onNewCharacter: EventEmitter<Character> = new EventEmitter();

  addCharacter() {
    if (this.newCharacter.name.trim().length != 0) {
      this.dbzService.addNewCharacter(this.newCharacter);
      // this.onNewCharacter.emit(this.newCharacter);
      console.log(this.newCharacter);
      this.newCharacter = {
        name:'',
        power:0
      }
    }
  }

  constructor(private dbzService: DbzService){
  }

}
