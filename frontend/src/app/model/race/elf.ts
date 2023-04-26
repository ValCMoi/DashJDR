import { Race } from "./race";
import { StatsCharacter } from "./stats-character";

export class Elf extends Race {
    
    constructor(){
        super()
        this.setStats(new StatsCharacter(2,8,5,7,3))
    }

}
