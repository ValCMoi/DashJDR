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

  ngOnInit(): void {
    console.log(new Mercenaire(5).getStats().toArray())

    //this.character = new Character("Paskal", new Orc(), [ new Mage(8), new Mercenaire(5) ])   
    
    this.races.push(new Humain()) 
    this.races.push(new Elf()) 
    this.races.push(new Orc()) 
    
    this.character = new Character("Dylan", new Elf(), [ new Mage(7) ])   

    this.stats = this.character.getStats().toArray().toString()
    this.characterRace = this.character.getRace().getNom()

    this.pseudo = this.character.getNom()
    
  }

}
