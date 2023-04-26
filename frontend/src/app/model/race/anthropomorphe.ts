import { Race } from "./race";
import { StatsCharacter } from "./stats-character";

export class Anthropomorphe extends Race {     

    constructor(){
        super()
        this.setStats(new StatsCharacter(6,6,4,7,3))
    }

}
