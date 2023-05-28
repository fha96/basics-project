import { Component, Input } from "@angular/core";
import { Recipe } from "../recipe.model";


@Component({
    selector:'recipe-detail',
    templateUrl:'recipedetail.component.html',
    styleUrls:[]
})



export class RecipeDetail {

    @Input() detailed: Recipe ;


    constructor(){
        
    }
}