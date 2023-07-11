import { EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';
import { Ingredient } from 'src/app/shared/ingredient.model';

export class ShopListService {
  startedEditing = new Subject<number>();
  ingredientsChange = new Subject<Ingredient[]>();
  private ingredients: Ingredient[] = [
    new Ingredient('Apple', 3),
    new Ingredient('Orange', 55),
  ];

  updateList(data: { name: string; amount: number }) {
    this.ingredients.push(new Ingredient(data.name, data.amount));
    this.ingredientsChange.next(this.ingredients.slice());
  }

  getIngredients() {
    return this.ingredients.slice();
    // return this.ingredients;
  }

  getItemById(id: number) {
    return this.ingredients[id];
  }

  addToShoppingList(ingredient: Ingredient[]) {
    this.ingredients.push(...ingredient);
    this.ingredientsChange.next(this.ingredients.slice());
  }

  updateItem(newData: Ingredient, id: number) {
    this.ingredients[id] = newData;
    this.ingredientsChange.next(this.ingredients.slice());
  }

  deleteItem(id: number) {
   this.ingredients.splice(id, 1);
   this.ingredientsChange.next(this.ingredients.slice());
  }
}
