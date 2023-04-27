import { StatsNameEnum } from "../stats/stats-name.enum";
import { Race } from "./race";
import { StatsCharacter } from "./stats-character";

export class Orc extends Race {
    
    constructor(){
        super()
        this.setStat(StatsNameEnum.FORCE,           8)
        this.setStat(StatsNameEnum.INTELLIGENCE,    2)
        this.setStat(StatsNameEnum.CHARISME,        3)
        this.setStat(StatsNameEnum.DEXTERITE,       3)
        this.setStat(StatsNameEnum.CONSTITUTION,    9)
    }

}
