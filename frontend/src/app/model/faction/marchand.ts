import { StatsCharacter } from "../race/stats-character";
import { Faction } from "./faction";

export class Marchand extends Faction{

    constructor(level:number = 1){
        super(
            [
                new StatsCharacter().setCharisme(2).setIntelligence(1), 
                new StatsCharacter().setCharisme(3).setIntelligence(1), 
                new StatsCharacter().setCharisme(5).setIntelligence(2), 
                new StatsCharacter().setCharisme(6).setIntelligence(2), 
                new StatsCharacter().setCharisme(7).setIntelligence(3), 
                new StatsCharacter().setCharisme(9).setIntelligence(3), 
                new StatsCharacter().setCharisme(10).setIntelligence(3), 
                new StatsCharacter().setCharisme(11).setIntelligence(4), 
                new StatsCharacter().setCharisme(12).setIntelligence(4), 
                new StatsCharacter().setCharisme(14).setIntelligence(4), 
            ],
            level
        )
    }
}