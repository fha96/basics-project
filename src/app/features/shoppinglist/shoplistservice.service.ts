import { EventEmitter } from "@angular/core";
import { Ingredient } from "src/app/shared/ingredient.model";

export class ShopListService {
    ingredientsChange = new EventEmitter<Ingredient[]>();
    private ingredients: Ingredient[] = [
    new Ingredient('Apple',3),
    new Ingredient('Orange',55)
  ];


    updateList(data:{name:string, amount: number}){
        this.ingredients.push(new Ingredient(data.name, data.amount));
        this.ingredientsChange.emit(this.ingredients.slice());
     }



     getIngredients(){
        return this.ingredients.slice();
        // return this.ingredients;
     }


     addToShoppingList(ingredient: Ingredient[]){
      this.ingredients.push(...ingredient);
      this.ingredientsChange.emit(this.ingredients.slice());
     }
}