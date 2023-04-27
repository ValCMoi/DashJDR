import { StatsNameEnum } from "../stats/stats-name.enum";
import { Race } from "./race";
import { StatsCharacter } from "./stats-character";

export class Humain extends Race {
    
    constructor(){
        super()
        this.setStat(StatsNameEnum.FORCE,           5)
        this.setStat(StatsNameEnum.INTELLIGENCE,    5)
        this.setStat(StatsNameEnum.CHARISME,        5)
        this.setStat(StatsNameEnum.DEXTERITE,       5)
        this.setStat(StatsNameEnum.CONSTITUTION,    5)
    }

}
