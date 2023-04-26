import { StatsCharacter } from "../race/stats-character";

export class Statable{
    private nom!:string;
    private stats!:StatsCharacter

    constructor(){
        this.nom = this.constructor.name
    }

    setNom(nom: string): void{
        this.nom = nom
    }

    getNom():string{
        return this.nom
    }

    getStats():StatsCharacter{
        return this.stats
    }

    setStats(stats: StatsCharacter): void{
        this.stats = stats
    }
}