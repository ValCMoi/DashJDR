import { StatsCharacter } from "../race/stats-character";
import { Faction } from "./faction";

export class Mage extends Faction{

    constructor(level:number = 1){
        super(
            [
                new StatsCharacter().setIntelligence(2).setDexterite(1), 
                new StatsCharacter().setIntelligence(3).setDexterite(1), 
                new StatsCharacter().setIntelligence(5).setDexterite(2), 
                new StatsCharacter().setIntelligence(6).setDexterite(2), 
                new StatsCharacter().setIntelligence(7).setDexterite(3), 
                new StatsCharacter().setIntelligence(9).setDexterite(3), 
                new StatsCharacter().setIntelligence(10).setDexterite(3), 
                new StatsCharacter().setIntelligence(11).setDexterite(4), 
                new StatsCharacter().setIntelligence(12).setDexterite(4), 
                new StatsCharacter().setIntelligence(14).setDexterite(4), 
        
            ],
            level
        )
    }
}