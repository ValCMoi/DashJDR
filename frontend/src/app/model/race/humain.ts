import { Race } from "./race";
import { StatsRace } from "./stats-race";

export class Humain extends Race {
    
    private statsConfig:StatsRace =                 
        {
            force:          5,
            intelligence:   5,
            charisme:       5,
            dexterité:      5,
            constitution:   5,
        }

    constructor(){
        super()
        this.setStats(this.statsConfig)
    }

}
