import { Statable } from "../statable/Statable";

export class Race extends Statable{

    private couleur!:string;

    getCouleur():string{
        return this.couleur
    }

    setCouleur(couleur: string){
        this.couleur = couleur
    }

}
