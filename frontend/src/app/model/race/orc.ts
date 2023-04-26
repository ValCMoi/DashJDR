import { Race } from "./race";
import { StatsCharacter } from "./stats-character";

export class Orc extends Race {
    
    constructor(){
        super()
        this.setStats(new StatsCharacter(8,2,3,3,9))
    }

}
