import { Ingredient } from "src/app/shared/ingredient.model";

export class Recipe {
    public ingredients: Ingredient[];
    public name: string;
    public description: string;
    public imagePath: string;


    constructor(name:string, desc:string, imgUrl:string, ingredient: Ingredient[]){
        this.name = name ;
        this.description = desc ;
        this.imagePath = imgUrl ;
        this.ingredients = ingredient ;
    }
}