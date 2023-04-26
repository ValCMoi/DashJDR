import { StatsRace } from "./stats-race";

export class Race {

    private nom!:string;
    private couleur!:string;
    private stats!:StatsRace

    
    constructor(){
        this.nom = this.constructor.name
    }

    getNom():string{
        return this.nom
    }

    getStats():StatsRace{
        return this.stats
    }

    setStats(stats: StatsRace){
        this.stats = stats
    }

    getCouleur():string{
        return this.couleur
    }

    setCouleur(couleur: string){
        this.couleur = couleur
    }

}
