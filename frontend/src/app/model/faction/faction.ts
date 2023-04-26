import { StatsCharacter } from "../race/stats-character";
import { Statable } from "../statable/Statable";

export class Faction extends Statable{
    private level!: number
    private statsLevel!: StatsCharacter[]


    constructor(statsLevel: StatsCharacter[], level: number = 1){
        super()
        this.setLevel(level);
        this.setLevelStats(statsLevel)
    }

    setLevel(level: number){
        if(level > 0){
            this.level = level
        }
    }

    levelUp(nbLevelUp: number = 1):void{
        this.setLevel(this.level + nbLevelUp)
    }

    getLevel():number{
        return this.level
    }

    getStatsLevel(){
        return this.statsLevel
    }

    setLevelStats(statsLevel: StatsCharacter[]): void {
        this.statsLevel = statsLevel
    }

    override getStats(): StatsCharacter {
        return this.getStatsLevel()[this.getLevel() -1]
    }
}