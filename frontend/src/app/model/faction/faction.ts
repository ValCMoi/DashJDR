import { StatsCharacter } from "../race/stats-character";
import { Statable } from "../statable/Statable";
import { Stats } from "../stats/stats";

export class Faction extends Statable{
    private level!: number
    private statsLevel: Statable[] = []
    private nbLevel:number = 10


    constructor(statsLevel: Statable[] = [], level: number = 1){
        super()
        this.setLevel(level);
        if(statsLevel?.length == 0){
            for(let i = 0; i < this.nbLevel; i++){
                this.statsLevel = [...this.statsLevel, new Statable()]
            }
        }else{
            this.setLevelStats(statsLevel)
        }

    }

    setLevel(levelInput: number):Faction{
        if(levelInput > 0){
            this.level = levelInput
        }
        return this
    }

    levelUp(nbLevelUp: number = 1):void{
        this.setLevel(this.level + nbLevelUp)
    }

    getLevel():number{
        return this.level
    }

    getStatsLevel():Statable[]{
        return this.statsLevel
    }

    setLevelStats(statsLevel: Statable[]): void {
        this.statsLevel = statsLevel
    }

    override getStats(): Stats[] {
        return this.getStatsLevel()[this.getLevel() -1].getStats()
    }
}