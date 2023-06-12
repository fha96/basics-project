import { Component, OnInit } from "@angular/core";
import { Recipe } from "../recipe.model";
import { RecipeService } from "../recipeservice.service";





@Component({
    selector:'recipe-list',
    templateUrl:'./recipelist.component.html',
    styleUrls:[]
})




export class RecipeList implements OnInit{
    recipes: Recipe[] ;

    constructor(private recipeService: RecipeService){}

    ngOnInit(): void {
        this.recipes = this.recipeService.getRecipies();
    }

    showDetails(recipeItem: Recipe){
        this.recipeService.recipeSelected.emit(recipeItem)
    }


}