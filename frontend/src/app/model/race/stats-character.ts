export class StatsCharacter {
    private force!:number
    private intelligence!:number
    private charisme!:number
    private dexterite!:number
    private constitution!:number

    constructor(force:number = 0, intelligence:number = 0, charisme:number = 0, dexterite:number = 0, constitution:number = 0){
        this.force = force
        this.intelligence = intelligence
        this.charisme = charisme
        this.dexterite = dexterite
        this.constitution = constitution
    }

    setForce(newValue: number = 0): StatsCharacter{
        this.force = newValue
        return this
    }

    getForce(): number{
        return this.force 
    }

    setIntelligence(newValue: number = 0): StatsCharacter{
        this.intelligence = newValue
        return this
    }

    getIntelligence(): number{
        return this.intelligence 
    }

    setCharisme(newValue: number = 0): StatsCharacter{
        this.charisme = newValue
        return this
    }

    getCharisme(): number{
        return this.charisme 
    }

    setDexterite(newValue: number = 0): StatsCharacter{
        this.dexterite = newValue
        return this
    }

    getDexterite(): number{
        return this.dexterite 
    }

    setConstitution(newValue: number = 0): StatsCharacter{
        this.constitution = newValue
        return this
    }

    getConstitution(): number{
        return this.constitution 
    }

    toArray():number[]{
        return [
            this.getForce(),
            this.getIntelligence(),
            this.getCharisme(),
            this.getDexterite(),
            this.getConstitution(),
        ]
    }
}
