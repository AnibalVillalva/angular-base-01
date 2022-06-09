import { Component, Input } from '@angular/core';
import { Character } from '../interfaces/dbz.interfaces';
import { DbzService } from '../services/dbz.service';
import { ListComponent } from '../../heroes/list/list.component';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})

export class CharacterComponent{

  get listCharacter(): Character[] {
    return this.dbzService.listCharacter;
  }

  constructor(private dbzService: DbzService){
  }

}

