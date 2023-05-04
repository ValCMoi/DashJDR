import { Faction } from "../faction/faction";
import { Guerrier } from "../faction/guerrier";
import { Humain } from "../race/humain";
import { Race } from "../race/race";
import { Statable } from "../statable/Statable";
import { Stats } from "../stats/stats";

export class Character extends Statable{

    private race!:Race
    private factions!:Faction[]
    
    constructor(nom: string = "NA", race: Race = new Humain, factions: Faction[] = [new Guerrier()]){
        super()
        this.setNom(nom)
        this.setRace(race)
        this.setFactions(factions)
    }

    setRace(race: Race):void{
        this.race = race
        this.setStats(race.getStats())
    }

    getRace():Race{
        return this.race
    }

    getFactions():Faction[]{
        return this.factions
    }

    addFaction(faction: Faction){
        if(!this.factions.find(f => f.getNom() == faction.getNom())){
            this.setFactions([...this.factions, faction])
        }
    }

    setFactions(factions: Faction[]){
        this.factions = factions
    }
    
    getStatsFaction():Stats[]{
        let arrBonusFaction:Stats[] = []

        this.getFactions().forEach(faction => {
            faction.getStats().forEach(factionStat => {
                let statArr = arrBonusFaction.find(el =>el.getNom() == factionStat.getNom())
                if(statArr){
                    statArr.setValeur(statArr.getValeur() + factionStat.getValeur())
                }else{
                    arrBonusFaction.push(new Stats(factionStat.getNom(), factionStat.getValeur()))
                }
            })
        })       
        return arrBonusFaction
    }

    getStatsTotal(): Stats[] {
        let statsTotal:Stats[] = this.getStats()
        let statsFaction:Stats[] = this.getStatsFaction()

        statsTotal.forEach(stat => {
            if(statsFaction.find(sf => sf.getNom() == stat.getNom())){
                stat.setValeur(stat.getValeur() + (statsFaction.find(sf => sf.getNom() == stat.getNom())?.getValeur() ?? 0))
            }
        })

        return statsTotal
    }

    getJobsName():String[]{
        return this.getFactions().map(f => `${f.getNom()} lvl:${f.getLevel()}`)
    }
}