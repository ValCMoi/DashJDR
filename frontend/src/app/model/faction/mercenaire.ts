import { StatsCharacter } from "../race/stats-character";
import { Statable } from "../statable/Statable";
import { StatsNameEnum } from "../stats/stats-name.enum";
import { Faction } from "./faction";

export class Mercenaire extends Faction{   

    constructor(level:number = 1){
        super()
        let levelStats = [
            new Statable().setStat(StatsNameEnum.DEXTERITE, 2).setStat(StatsNameEnum.FORCE, 1),
            new Statable().setStat(StatsNameEnum.DEXTERITE, 3).setStat(StatsNameEnum.FORCE, 1),
            new Statable().setStat(StatsNameEnum.DEXTERITE, 5).setStat(StatsNameEnum.FORCE, 2),
            new Statable().setStat(StatsNameEnum.DEXTERITE, 6).setStat(StatsNameEnum.FORCE, 2),
            new Statable().setStat(StatsNameEnum.DEXTERITE, 7).setStat(StatsNameEnum.FORCE, 3),
            new Statable().setStat(StatsNameEnum.DEXTERITE, 9).setStat(StatsNameEnum.FORCE, 3),
            new Statable().setStat(StatsNameEnum.DEXTERITE, 10).setStat(StatsNameEnum.FORCE, 3),
            new Statable().setStat(StatsNameEnum.DEXTERITE, 11).setStat(StatsNameEnum.FORCE, 4),
            new Statable().setStat(StatsNameEnum.DEXTERITE, 12).setStat(StatsNameEnum.FORCE, 4),
            new Statable().setStat(StatsNameEnum.DEXTERITE, 14).setStat(StatsNameEnum.FORCE, 4),
        ]
        this.setLevelStats(levelStats)
    }
}