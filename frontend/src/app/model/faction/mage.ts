import { StatsCharacter } from "../race/stats-character";
import { Faction } from "./faction";

export class Mage extends Faction{

    constructor(level:number = 1){
        super(
            [
                new StatsCharacter().setIntelligence(2).setDextérité(1), 
                new StatsCharacter().setIntelligence(3).setDextérité(1), 
                new StatsCharacter().setIntelligence(5).setDextérité(2), 
                new StatsCharacter().setIntelligence(6).setDextérité(2), 
                new StatsCharacter().setIntelligence(7).setDextérité(3), 
                new StatsCharacter().setIntelligence(9).setDextérité(3), 
                new StatsCharacter().setIntelligence(10).setDextérité(3), 
                new StatsCharacter().setIntelligence(11).setDextérité(4), 
                new StatsCharacter().setIntelligence(12).setDextérité(4), 
                new StatsCharacter().setIntelligence(14).setDextérité(4), 
        
            ],
            level
        )
    }
}