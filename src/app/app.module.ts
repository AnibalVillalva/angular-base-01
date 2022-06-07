import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeroesModules } from './heroes/heroes.modules';
import { CounterModules } from './counter/counter.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HeroesModules,
    CounterModules,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
