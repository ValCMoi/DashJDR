import { Component, OnInit } from '@angular/core';
import { Elf } from './model/race/elf';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent{
 title = new Elf().getNom()
}
