import { Race } from "./race";
import { StatsRace } from "./stats-race";

export class Elf extends Race {
   
    private statsConfig:StatsRace =                 
        {
            force:          2,
            intelligence:   8,
            charisme:       5,
            dexterité:      7,
            constitution:   3,
        }

    constructor(){
        super()
        this.setCouleur("#baabff")
        this.setStats(this.statsConfig)
    }

}
