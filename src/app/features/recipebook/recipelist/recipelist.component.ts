import { Component, OnDestroy, OnInit } from "@angular/core";
import { Recipe } from "../recipe.model";
import { RecipeService } from "../recipeservice.service";
import { ActivatedRoute, Router } from "@angular/router";
import { Subscription } from "rxjs";





@Component({
    selector:'recipe-list',
    templateUrl:'./recipelist.component.html',
    styleUrls:[]
})




export class RecipeList implements OnInit,OnDestroy{
    recipes: Recipe[] ;
    recipeSubscription: Subscription ;

    constructor(private recipeService: RecipeService
                ,private router: Router
                ,private activatedRoute: ActivatedRoute){}

    ngOnInit(): void {
       this.recipeSubscription = this.recipeService.recipeChanges.subscribe(
            (recipes: Recipe[]) => {
              this.recipes = recipes;
              console.log(recipes);
              
            }
          )
        this.recipes = this.recipeService.getRecipies();
        
    }

    showDetails(recipeItem: Recipe){
        this.recipeService.recipeSelected.next(recipeItem);
    }

    navigateToNewRecipe() {
        this.router.navigate(['new'], { relativeTo: this.activatedRoute})
    }

    ngOnDestroy(): void {
        this.recipeSubscription.unsubscribe();
    }

}