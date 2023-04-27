import { StatsNameEnum } from "../stats/stats-name.enum";
import { Race } from "./race";
import { StatsCharacter } from "./stats-character";

export class Elf extends Race {
    
    constructor(){
        super()
        this.setStat(StatsNameEnum.FORCE,           2)
        this.setStat(StatsNameEnum.INTELLIGENCE,    8)
        this.setStat(StatsNameEnum.CHARISME,        5)
        this.setStat(StatsNameEnum.DEXTERITE,       7)
        this.setStat(StatsNameEnum.CONSTITUTION,    3)
    }

}
