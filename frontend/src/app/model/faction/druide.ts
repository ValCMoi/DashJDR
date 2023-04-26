import { StatsCharacter } from "../race/stats-character";
import { Faction } from "./faction";

export class Druide extends Faction{

    constructor(level:number = 1){
        super(
            [
                new StatsCharacter().setIntelligence(2).setCharisme(1), 
                new StatsCharacter().setIntelligence(3).setCharisme(1), 
                new StatsCharacter().setIntelligence(5).setCharisme(2), 
                new StatsCharacter().setIntelligence(6).setCharisme(2), 
                new StatsCharacter().setIntelligence(7).setCharisme(3), 
                new StatsCharacter().setIntelligence(9).setCharisme(3), 
                new StatsCharacter().setIntelligence(10).setCharisme(3), 
                new StatsCharacter().setIntelligence(11).setCharisme(4), 
                new StatsCharacter().setIntelligence(12).setCharisme(4), 
                new StatsCharacter().setIntelligence(14).setCharisme(4), 
        
            ],
            level
        )
    }
}