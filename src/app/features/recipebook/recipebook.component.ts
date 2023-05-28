import { Component, Output } from "@angular/core";
import { Recipe } from "./recipe.model";





@Component({
    selector:'recipe-book',
    templateUrl:'recipebook.component.html',
    styleUrls:['recipebook.component.css']
})


export class RecipeBook {
    recipe: Recipe ;


    detailRecipe(payload: Recipe) {
        console.log(payload);
        
       this.recipe = payload;
    }
}