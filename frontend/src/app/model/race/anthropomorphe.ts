import { Race } from "./race";
import { StatsRace } from "./stats-race";

export class Anthropomorphe extends Race {
   
    private statsConfig:StatsRace =                 
        {
            force:          6,
            intelligence:   6,
            charisme:       4,
            dexterité:      7,
            constitution:   3,
        }

    constructor(){
        super()
        this.setStats(this.statsConfig)
    }

}
