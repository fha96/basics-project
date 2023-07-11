import { Component, OnDestroy, OnInit } from '@angular/core';
import { ShopListService } from './shoplistservice.service';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'shopping-list',
  templateUrl: './shoppinglist.component.html',
  styleUrls: [],
})
export class ShoppingList implements OnInit,OnDestroy {
  ingredients?: Ingredient[];
  subscriptionOne: Subscription ;
  constructor(private shoppingService: ShopListService) {}

  ngOnInit(): void {
    this.ingredients = this.shoppingService.getIngredients();
    this. subscriptionOne = this.shoppingService.ingredientsChange.subscribe(
      (ingredient: Ingredient[]) => (this.ingredients = ingredient)
    );
  }

  onEditList(id) {
    this.shoppingService.startedEditing.next(id);
  }

  ngOnDestroy(): void {
      this.subscriptionOne.unsubscribe();
  }
}
