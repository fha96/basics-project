import { Component, Output } from "@angular/core";
import { Recipe } from "./recipe.model";
import { RecipeService } from './recipeservice.service';





@Component({
    selector:'recipe-book',
    templateUrl:'recipebook.component.html',
    styleUrls:['recipebook.component.css'],
    providers:[RecipeService]
})


export class RecipeBook {
    recipe: Recipe ;


    constructor(private recipeService: RecipeService){}



    ngOnInit(): void {
        this.recipeService.recipeSelected.subscribe(
            (recipe: Recipe) => {
                this.recipe = recipe ;
            }
        )
    }
    detailRecipe(payload: Recipe) {
    //     console.log(payload);
    //    this.recipe = payload;
    
    }
}