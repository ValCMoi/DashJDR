import { Statable } from "../statable/Statable";
import { StatsNameEnum } from "../stats/stats-name.enum";
import { Race } from "./race";
import { StatsCharacter } from "./stats-character";

export class Anthropomorphe extends Race {     

    constructor(){
        super()
        this.setStat(StatsNameEnum.FORCE,           6)
        this.setStat(StatsNameEnum.INTELLIGENCE,    6)
        this.setStat(StatsNameEnum.CHARISME,        4)
        this.setStat(StatsNameEnum.DEXTERITE,       7)
        this.setStat(StatsNameEnum.CONSTITUTION,    3)
    }

}
