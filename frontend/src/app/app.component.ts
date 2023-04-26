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


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  races:Race[] = []
  stats!:string
  pseudo!:string
  race!:string
  character!:Character 

  ngOnInit(): void {

    this.character = new Character("ValCMoi", new Elf(), [new Guerrier(5)])   
    this.stats = this.character.getStats().toArray().toString()
    this.pseudo = this.character.getNom()
    this.race = this.character.getRace().getNom()
  }

}
