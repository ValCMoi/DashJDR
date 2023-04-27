import { Statable } from "../statable/Statable";
import { StatsNameEnum } from "../stats/stats-name.enum";
import { Faction } from "./faction";

export class Guerrier extends Faction{   

    constructor(){
        super()
        let levelStats = [
            new Statable().setStat(StatsNameEnum.FORCE, 2).setStat(StatsNameEnum.CONSTITUTION, 1),
            new Statable().setStat(StatsNameEnum.FORCE, 3).setStat(StatsNameEnum.CONSTITUTION, 1),
            new Statable().setStat(StatsNameEnum.FORCE, 5).setStat(StatsNameEnum.CONSTITUTION, 2),
            new Statable().setStat(StatsNameEnum.FORCE, 6).setStat(StatsNameEnum.CONSTITUTION, 2),
            new Statable().setStat(StatsNameEnum.FORCE, 7).setStat(StatsNameEnum.CONSTITUTION, 3),
            new Statable().setStat(StatsNameEnum.FORCE, 9).setStat(StatsNameEnum.CONSTITUTION, 3),
            new Statable().setStat(StatsNameEnum.FORCE, 10).setStat(StatsNameEnum.CONSTITUTION, 3),
            new Statable().setStat(StatsNameEnum.FORCE, 11).setStat(StatsNameEnum.CONSTITUTION, 4),
            new Statable().setStat(StatsNameEnum.FORCE, 12).setStat(StatsNameEnum.CONSTITUTION, 4),
            new Statable().setStat(StatsNameEnum.FORCE, 14).setStat(StatsNameEnum.CONSTITUTION, 4),
        ]
        this.setLevelStats(levelStats)
    }
}