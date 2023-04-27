import { StatsNameEnum } from "./stats-name.enum";

export class Stats {

    private nom!: StatsNameEnum
    private valeur: number = 0

    constructor(nom: StatsNameEnum = StatsNameEnum.FORCE, valeur = 0){
        this.setNom(nom)
        this.setValeur(valeur)
    }

    setNom(nom: StatsNameEnum = StatsNameEnum.FORCE):Stats{
        this.nom = nom
        return this
    }

    setValeur(valeur: number = 0):Stats{
        this.valeur = valeur
        return this
    }

    getValeur():number{
        return this.valeur
    }

    getNom():StatsNameEnum{
        return this.nom
    }
}