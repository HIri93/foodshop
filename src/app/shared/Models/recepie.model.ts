import { Ingredient } from './ingredient.model';

export class Recepie{
    // static slice: any;
    // static slice(): Recepie[] {
    //   throw new Error('Method not implemented.');
    // }
    name: string;
    description: string;
    imagePath: string;
    ingeridient: Ingredient[];
    constructor(name: string, description: string, imagePath: string, ingeridient: Ingredient[]){
        this.name = name;
        this.description = description;
        this.imagePath = imagePath;
        this.ingeridient = ingeridient;
    }
}
