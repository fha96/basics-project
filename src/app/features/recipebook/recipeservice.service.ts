import { Recipe } from './recipe.model';
import { Subject } from 'rxjs';

export class RecipeService {
  recipeChanges = new Subject<Recipe[]>();

  public recipeSelected = new Subject<Recipe>();
  private recipes: Recipe[] = [];
  // private recipes: Recipe[] = [
  //   new Recipe(
  //     'apple',
  //     'delecious',
  //     'https://cdn.pixabay.com/photo/2014/12/21/23/28/recipe-575434_960_720.png',
  //     [new Ingredient('mayo', 3), new Ingredient('Ketch', 3)]
  //   ),
  //   new Recipe(
  //     'Orange',
  //     'Not bad ksdklsd  kakkka',
  //     'https://cdn.pixabay.com/photo/2014/12/21/23/28/recipe-575434_960_720.png',
  //     [new Ingredient('nuts', 3), new Ingredient('Luts', 3)]
  //   ),
  //   new Recipe(
  //     'Lemon',
  //     'sd,.sdl,,sd',
  //     'https://cdn.pixabay.com/photo/2014/12/21/23/28/recipe-575434_960_720.png',
  //     [new Ingredient('mayo', 3), new Ingredient('ginger', 3)]
  //   ),
  // ];

  getRecipies() {
    return this.recipes.slice();
  }

  getRecipeById(id: number) {
    return this.recipes[id];
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipeChanges.next(this.recipes.slice());
  }

  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipeChanges.next(this.recipes.slice());
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipeChanges.next(this.recipes.slice());
  }

  setRecipies(recipiesV1: Recipe[]) {
    this.recipes = recipiesV1;
    this.recipeChanges.next(this.recipes.slice());
  }
}
