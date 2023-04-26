import { Race } from "./race";
import { StatsRace } from "./stats-race";

export class Orc extends Race {
    
    private statsConfig:StatsRace =                 
        {
            force:          8,
            intelligence:   2,
            charisme:       3,
            dexterité:      3,
            constitution:   9,
        }

    constructor(){
        super()
        this.setCouleur("#baffba")
        this.setStats(this.statsConfig)
    }

}
