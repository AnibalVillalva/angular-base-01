import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MainPageComponent } from './main-page/main-page.component';
import { CharacterComponent } from './character/character.component';
import { AddCharacterComponent } from './add-character/add-character.component';
import { DbzService } from './services/dbz.service';


@NgModule({
  declarations: [
    MainPageComponent,
    CharacterComponent,
    AddCharacterComponent
  ],

  imports: [
    CommonModule,
    FormsModule
  ],

  exports: [
    MainPageComponent
  ],
  providers:[
    DbzService
  ]
})
export class DbzModule { }
