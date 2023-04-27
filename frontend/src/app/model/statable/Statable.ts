import { Stats } from "../stats/stats";
import { StatsNameEnum } from "../stats/stats-name.enum";

export class Statable{
    private nom!:string;
    private stats:Stats[] = []

    constructor(){
        this.nom = this.constructor.name
        Object.values(StatsNameEnum).forEach(statName => {
            this.stats.push(new Stats(statName as any))
        })
    }


    setStat(nomStat: StatsNameEnum, valeur:number = 0):Statable{
        this.getStat(nomStat)?.setValeur(valeur)
        return this
    }

    setStats(stats: Stats[]): void{
        this.stats = stats
    }

    getStat(nomStat: StatsNameEnum):Stats|undefined{
        return this.stats.find(stat => stat.getNom() == nomStat)
    }

    getStats():Stats[]{
        return this.stats
    }

    setNom(nom: string): void{
        this.nom = nom
    }

    getNom():string{
        return this.nom
    }


}