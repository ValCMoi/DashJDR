import { StatsCharacter } from "../race/stats-character";
import { Statable } from "../statable/Statable";
import { StatsNameEnum } from "../stats/stats-name.enum";
import { Faction } from "./faction";

export class Marchand extends Faction{

    constructor(level:number = 1){
        super()
        let levelStats = [
            new Statable().setStat(StatsNameEnum.CHARISME, 2).setStat(StatsNameEnum.INTELLIGENCE, 1),
            new Statable().setStat(StatsNameEnum.CHARISME, 3).setStat(StatsNameEnum.INTELLIGENCE, 1),
            new Statable().setStat(StatsNameEnum.CHARISME, 5).setStat(StatsNameEnum.INTELLIGENCE, 2),
            new Statable().setStat(StatsNameEnum.CHARISME, 6).setStat(StatsNameEnum.INTELLIGENCE, 2),
            new Statable().setStat(StatsNameEnum.CHARISME, 7).setStat(StatsNameEnum.INTELLIGENCE, 3),
            new Statable().setStat(StatsNameEnum.CHARISME, 9).setStat(StatsNameEnum.INTELLIGENCE, 3),
            new Statable().setStat(StatsNameEnum.CHARISME, 10).setStat(StatsNameEnum.INTELLIGENCE, 3),
            new Statable().setStat(StatsNameEnum.CHARISME, 11).setStat(StatsNameEnum.INTELLIGENCE, 4),
            new Statable().setStat(StatsNameEnum.CHARISME, 12).setStat(StatsNameEnum.INTELLIGENCE, 4),
            new Statable().setStat(StatsNameEnum.CHARISME, 14).setStat(StatsNameEnum.INTELLIGENCE, 4),
        ]
        this.setLevelStats(levelStats)
    }
}