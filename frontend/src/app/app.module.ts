import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RacePipe } from './race/race.pipe';
import { CharacterCardComponent } from './character/character-card/character-card.component';

@NgModule({
  declarations: [
    AppComponent,
    RacePipe,
    CharacterCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
