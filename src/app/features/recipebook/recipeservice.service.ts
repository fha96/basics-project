import { Ingredient } from "src/app/shared/ingredient.model";
import { Recipe } from "./recipe.model";
import { EventEmitter } from "@angular/core";

export class RecipeService {


    public recipeSelected = new EventEmitter<Recipe>();
private recipes: Recipe[] = [
    new Recipe('apple', 'delecious', 'https://cdn.pixabay.com/photo/2014/12/21/23/28/recipe-575434_960_720.png',
    [new Ingredient('mayo', 3),
new Ingredient('Ketch',3)]),
    new Recipe('Orange', 'Not bad ksdklsd  kakkka', 'https://cdn.pixabay.com/photo/2014/12/21/23/28/recipe-575434_960_720.png',[new Ingredient('nuts', 3),
    new Ingredient('Luts',3)]),
    new Recipe('Lemon', 'sd,.sdl,,sd', 'https://cdn.pixabay.com/photo/2014/12/21/23/28/recipe-575434_960_720.png',[new Ingredient('mayo', 3),
    new Ingredient('ginger',3)]),
];



getRecipies(){
    return this.recipes.slice();
}

getRecipeById(id: number) {
    return this.recipes[id];
}


}