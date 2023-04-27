import { Statable } from "../statable/Statable";
import { StatsNameEnum } from "../stats/stats-name.enum";
import { Faction } from "./faction";

export class Druide extends Faction{

    constructor(){
        super()
        let levelStats = [
            new Statable().setStat(StatsNameEnum.INTELLIGENCE, 2).setStat(StatsNameEnum.CHARISME, 1),
            new Statable().setStat(StatsNameEnum.INTELLIGENCE, 3).setStat(StatsNameEnum.CHARISME, 1),
            new Statable().setStat(StatsNameEnum.INTELLIGENCE, 5).setStat(StatsNameEnum.CHARISME, 2),
            new Statable().setStat(StatsNameEnum.INTELLIGENCE, 6).setStat(StatsNameEnum.CHARISME, 2),
            new Statable().setStat(StatsNameEnum.INTELLIGENCE, 7).setStat(StatsNameEnum.CHARISME, 3),
            new Statable().setStat(StatsNameEnum.INTELLIGENCE, 9).setStat(StatsNameEnum.CHARISME, 3),
            new Statable().setStat(StatsNameEnum.INTELLIGENCE, 10).setStat(StatsNameEnum.CHARISME, 3),
            new Statable().setStat(StatsNameEnum.INTELLIGENCE, 11).setStat(StatsNameEnum.CHARISME, 4),
            new Statable().setStat(StatsNameEnum.INTELLIGENCE, 12).setStat(StatsNameEnum.CHARISME, 4),
            new Statable().setStat(StatsNameEnum.INTELLIGENCE, 14).setStat(StatsNameEnum.CHARISME, 4),
        ]
        this.setLevelStats(levelStats)
    }
}