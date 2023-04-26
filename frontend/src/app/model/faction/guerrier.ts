import { StatsCharacter } from "../race/stats-character";
import { Faction } from "./faction";

export class Guerrier extends Faction{   

    constructor(level:number = 1){
        super(
            [
                new StatsCharacter().setForce(2).setConstitution(1), 
                new StatsCharacter().setForce(3).setConstitution(1), 
                new StatsCharacter().setForce(5).setConstitution(2), 
                new StatsCharacter().setForce(6).setConstitution(2), 
                new StatsCharacter().setForce(7).setConstitution(3), 
                new StatsCharacter().setForce(9).setConstitution(3), 
                new StatsCharacter().setForce(10).setConstitution(3), 
                new StatsCharacter().setForce(11).setConstitution(4), 
                new StatsCharacter().setForce(12).setConstitution(4), 
                new StatsCharacter().setForce(14).setConstitution(4), 
            ],
            level
        )
    }
}