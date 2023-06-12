import { Component, Input } from "@angular/core";
import { Recipe } from "../recipe.model";
import { ShoppingList } from "../../shoppinglist/shoppinglist.component";
import { ShopListService } from "../../shoppinglist/shoplistservice.service";


@Component({
    selector:'recipe-detail',
    templateUrl:'recipedetail.component.html',
    styleUrls:[]
})



export class RecipeDetail {

    @Input() detailed: Recipe ;


    constructor(private shoppingList: ShopListService ){
        
    }


    addToShoppingList(recipe: Recipe){
        this.shoppingList.addToShoppingList(recipe.ingredients);
    }
}