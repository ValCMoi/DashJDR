import { StatsCharacter } from "../race/stats-character";
import { Statable } from "../statable/Statable";
import { StatsNameEnum } from "../stats/stats-name.enum";
import { Faction } from "./faction";

export class Mage extends Faction{

    constructor(level:number = 1){
        super()

        let levelStats = [
            new Statable().setStat(StatsNameEnum.INTELLIGENCE, 2).setStat(StatsNameEnum.DEXTERITE, 1),
            new Statable().setStat(StatsNameEnum.INTELLIGENCE, 3).setStat(StatsNameEnum.DEXTERITE, 1),
            new Statable().setStat(StatsNameEnum.INTELLIGENCE, 5).setStat(StatsNameEnum.DEXTERITE, 2),
            new Statable().setStat(StatsNameEnum.INTELLIGENCE, 6).setStat(StatsNameEnum.DEXTERITE, 2),
            new Statable().setStat(StatsNameEnum.INTELLIGENCE, 7).setStat(StatsNameEnum.DEXTERITE, 3),
            new Statable().setStat(StatsNameEnum.INTELLIGENCE, 9).setStat(StatsNameEnum.DEXTERITE, 3),
            new Statable().setStat(StatsNameEnum.INTELLIGENCE, 10).setStat(StatsNameEnum.DEXTERITE, 3),
            new Statable().setStat(StatsNameEnum.INTELLIGENCE, 11).setStat(StatsNameEnum.DEXTERITE, 4),
            new Statable().setStat(StatsNameEnum.INTELLIGENCE, 12).setStat(StatsNameEnum.DEXTERITE, 4),
            new Statable().setStat(StatsNameEnum.INTELLIGENCE, 14).setStat(StatsNameEnum.DEXTERITE, 4),
        ]
        this.setLevelStats(levelStats)
    }
}