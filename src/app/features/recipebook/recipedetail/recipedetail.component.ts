import { Component, OnDestroy, OnInit } from "@angular/core";
import { Recipe } from "../recipe.model";
import { ShoppingList } from "../../shoppinglist/shoppinglist.component";
import { ShopListService } from "../../shoppinglist/shoplistservice.service";
import { ActivatedRoute, Params, Router } from "@angular/router";
import { RecipeService } from "../recipeservice.service";
import { Subscription } from "rxjs";


@Component({
    selector:'recipe-detail',
    templateUrl:'recipedetail.component.html',
    styleUrls:[]
})



export class RecipeDetail implements OnInit, OnDestroy {

    detailed: Recipe ;
    id: number ;
    recipeSubscription: Subscription ;
    constructor(private shoppingList: ShopListService,
                private activatedRoute: ActivatedRoute,
                private recipeService: RecipeService,
                private router: Router  ){}

    ngOnInit(): void {
        // first approach to update the detailed recipe component after deletion completed
        
        /* this.recipeSubscription = this.recipeService.recipeChanges.subscribe(
            (recipe: Recipe[]) => {
                this.detailed =this.recipeService.getRecipeById(this.id);
            }
        )*/
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


    onDeleteRecipe(){
        this.recipeService.deleteRecipe(this.id);
        // first approach
        this.router.navigate(['../../recipes'], {relativeTo: this.activatedRoute});
    }

    ngOnDestroy(): void {
        // this.recipeSubscription.unsubscribe();
    }
}