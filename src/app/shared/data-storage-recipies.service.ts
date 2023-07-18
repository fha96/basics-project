import { HttpClient, HttpEvent, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Recipe } from '../features/recipebook/recipe.model';
import { RecipeService } from '../features/recipebook/recipeservice.service';
import { map, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataStorageRecipies {
  constructor(private http: HttpClient, private recipeService: RecipeService) {}

  // first Approach of saving recipies into database
  // createRecipe(recipies: Recipe[]) {

  // }

  // second Approach of saving recipies into database by injecting recipe service and use the loaded recipies instead of pass parameter
  createRecipe() {
    const recipies = this.recipeService.getRecipies();
    // we used put to override all data because we are using firebase
    this.http
      .put<Recipe[]>(
        'https://ng-recipe-book-7d03d-default-rtdb.europe-west1.firebasedatabase.app/recipies.json',
        recipies
      )
      .pipe(
        map((recipies) => {
          return recipies.map((recipe) => {
            return {
              ...recipe,
              ingredients: recipe.ingredients ? recipe.ingredients : [],
            };
          });
        })
      )
      .subscribe((response) => {
        console.log(response);
      });
  }

  fetchRecipies() {
    return this.http
      .get<Recipe[]>(
        'https://ng-recipe-book-7d03d-default-rtdb.europe-west1.firebasedatabase.app/recipies.json'
      )
      .pipe(tap(
        recipies => {
            this.recipeService.setRecipies(recipies);
        }
      ))
  }
}
