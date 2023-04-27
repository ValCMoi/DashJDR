import { Component, OnInit } from '@angular/core';
import { Elf } from './model/race/elf';
import { Race } from './model/race/race';
import { Humain } from './model/race/humain';
import { Orc } from './model/race/orc';
import { Anthropomorphe } from './model/race/anthropomorphe';
import { Character } from './model/character/character';
import { Marchand } from './model/faction/marchand';
import { Guerrier } from './model/faction/guerrier';
import { Mage } from './model/faction/mage';
import { Mercenaire } from './model/faction/mercenaire';
import { Statable } from './model/statable/Statable';
import { StatsNameEnum } from './model/stats/stats-name.enum';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  races:Race[] = []
  stats!:string
  pseudo!:string
  
  characterRace!:string
  character!:Character
  stab:Statable = new Statable()

  ngOnInit(): void {
    
    this.character = new Character()
    this.character.setNom("Dylan")
    this.character.setRace(new Orc())
    this.character.addFaction(new Guerrier())
    this.character.getFactions()[0].setLevel(5)

    this.character.setStat(StatsNameEnum.CHARISME, 42)
    this.stats = this.character.getStats().map(s => `${s.getNom()}: ${s.getValeur()}`).toString()
    this.stats = this.character.getStatsTotal().map(s => `${s.getNom()}: ${s.getValeur()}`).toString()
    this.characterRace = this.character.getRace().getNom()
    this.pseudo = this.character.getNom()

  }
}
