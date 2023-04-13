import { Component } from "@angular/core";
import { Recipe } from "../recipe.model";





@Component({
    selector:'recipe-list',
    templateUrl:'./recipelist.component.html',
    styleUrls:[]
})




export class RecipeList {
    recipes: Recipe[] = [
        new Recipe('apple', 'delecious', 'https://cdn.pixabay.com/photo/2014/12/21/23/28/recipe-575434_960_720.png'),
        new Recipe('Orange', 'Not bad ksdklsd  kakkka', 'https://cdn.pixabay.com/photo/2014/12/21/23/28/recipe-575434_960_720.png'),
        new Recipe('Lemon', 'sd,.sdl,,sd', 'https://cdn.pixabay.com/photo/2014/12/21/23/28/recipe-575434_960_720.png'),
    ];

}