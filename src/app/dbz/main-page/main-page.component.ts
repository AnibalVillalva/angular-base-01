import { Component, OnInit } from '@angular/core';
import { Character } from '../interfaces/dbz.interfaces';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {

  newCharacter: Character = {
    name:"",
    power:0
  }

  constructor() {}
}
