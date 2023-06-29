import { Component, OnInit } from "@angular/core";
import { Recipe } from "../recipe.model";
import { ShoppingList } from "../../shoppinglist/shoppinglist.component";
import { ShopListService } from "../../shoppinglist/shoplistservice.service";
import { ActivatedRoute, Params } from "@angular/router";
import { RecipeService } from "../recipeservice.service";


@Component({
    selector:'recipe-detail',
    templateUrl:'recipedetail.component.html',
    styleUrls:[]
})



export class RecipeDetail implements OnInit {

    detailed: Recipe ;
    id: number ;

    constructor(private shoppingList: ShopListService,
                private activatedRoute: ActivatedRoute,
                private recipeService: RecipeService  ){}

    ngOnInit(): void {
        this.activatedRoute.params.subscribe(
            (params: Params) =>{
                this.id = +params.id ;
                this.detailed = this.recipeService.getRecipeById(this.id);
            }  
        )
    }

    addToShoppingList(recipe: Recipe){
        this.shoppingList.addToShoppingList(recipe.ingredients);
    }
}