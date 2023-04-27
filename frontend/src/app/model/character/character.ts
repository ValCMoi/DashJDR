import { Faction } from "../faction/faction";
import { Guerrier } from "../faction/guerrier";
import { Humain } from "../race/humain";
import { Race } from "../race/race";
import { StatsCharacter } from "../race/stats-character";
import { Statable } from "../statable/Statable";

export class Character extends Statable{

    private race!:Race
    private factions!:Faction[]

    constructor(nom: string, race: Race = new Humain, factions: Faction[] = [new Guerrier()]){
        super()
        this.setNom(nom)
        this.setRace(race)
        this.setFactions(factions)
    }


    setRace(race: Race):void{
        this.race = race
    }

    getRace():Race{
        return this.race
    }

    getFactions():Faction[]{
        return this.factions
    }

    setFactions(factions: Faction[]){
        this.factions = factions
    }
    
    //TODO refacto cette partie pour faire appelle à du polymorphisme, il faut penser à rendre generique le type des stats et creer un enum des nom de stats afin d'avoir juste à boucler dessus 
    /**
     * 
     * @returns 
     */
    override getStats(): StatsCharacter {
        if(this.getRace()){
            let statCharacter = this.getRace().getStats()

            this.getFactions().map(job => {
                console.log(job.getNom())
                statCharacter.setForce(statCharacter.getForce() + job.getStats().getForce())
                statCharacter.setIntelligence(statCharacter.getIntelligence() + job.getStats().getIntelligence())
                statCharacter.setCharisme(statCharacter.getCharisme() + job.getStats().getCharisme())
                statCharacter.setDexterite(statCharacter.getDexterite() + job.getStats().getDexterite())
                statCharacter.setConstitution(statCharacter.getConstitution() + job.getStats().getConstitution())
                console.table(statCharacter.toArray())
            })
    
            return statCharacter
        }
        return new StatsCharacter()
    }

}