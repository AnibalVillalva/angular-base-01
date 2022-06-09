import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MainPageComponent } from './main-page/main-page.component';
import { CharacterComponent } from './character/character.component';


@NgModule({
  declarations: [
    MainPageComponent,
    CharacterComponent
  ],

  imports: [
    CommonModule,
    FormsModule
  ],

  exports: [
    MainPageComponent
  ]
})
export class DbzModule { }
