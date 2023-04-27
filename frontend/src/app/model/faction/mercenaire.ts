import { StatsCharacter } from "../race/stats-character";
import { Faction } from "./faction";

export class Mercenaire extends Faction{   

    constructor(level:number = 1){
        super(
            [
                new StatsCharacter().setDexterite(2).setForce(1), 
                new StatsCharacter().setDexterite(3).setForce(1), 
                new StatsCharacter().setDexterite(5).setForce(2), 
                new StatsCharacter().setDexterite(6).setForce(2), 
                new StatsCharacter().setDexterite(7).setForce(3), 
                new StatsCharacter().setDexterite(9).setForce(3), 
                new StatsCharacter().setDexterite(10).setForce(3), 
                new StatsCharacter().setDexterite(11).setForce(4), 
                new StatsCharacter().setDexterite(12).setForce(4), 
                new StatsCharacter().setDexterite(14).setForce(4), 
            ]            ,
            level 
        )

    }
}