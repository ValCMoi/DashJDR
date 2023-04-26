import { Component, OnInit } from '@angular/core';
import { Elf } from './model/race/elf';
import { Race } from './model/race/race';
import { Humain } from './model/race/humain';
import { Orc } from './model/race/orc';
import { Anthropomorphe } from './model/race/anthropomorphe';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  races:Race[] = []

  ngOnInit(): void {
    this.races.push(new Humain())       
    this.races.push(new Elf())       
    this.races.push(new Orc())       
    this.races.push(new Anthropomorphe())         
  }

}
