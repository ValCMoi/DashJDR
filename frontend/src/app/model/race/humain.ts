import { Race } from "./race";
import { StatsCharacter } from "./stats-character";

export class Humain extends Race {
    
    constructor(){
        super()
        this.setStats(new StatsCharacter(5,5,5,5,5))
    }

}
