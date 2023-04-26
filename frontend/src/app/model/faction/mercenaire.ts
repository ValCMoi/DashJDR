import { StatsCharacter } from "../race/stats-character";
import { Faction } from "./faction";

export class Mercenaire extends Faction{   

    constructor(level:number = 1){
        super(
            [
                new StatsCharacter().setDextérité(2).setForce(1), 
                new StatsCharacter().setDextérité(3).setForce(1), 
                new StatsCharacter().setDextérité(5).setForce(2), 
                new StatsCharacter().setDextérité(6).setForce(2), 
                new StatsCharacter().setDextérité(7).setForce(3), 
                new StatsCharacter().setDextérité(9).setForce(3), 
                new StatsCharacter().setDextérité(10).setForce(3), 
                new StatsCharacter().setDextérité(11).setForce(4), 
                new StatsCharacter().setDextérité(12).setForce(4), 
                new StatsCharacter().setDextérité(14).setForce(4), 
            ]
        ),
        level 
    }
}