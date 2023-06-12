import {Component, OnInit} from '@angular/core';
import { ShopListService } from './shoplistservice.service';
import { Ingredient } from 'src/app/shared/ingredient.model';



@Component({
    selector:'shopping-list',
    templateUrl:'./shoppinglist.component.html',
    styleUrls:[]
})


export class ShoppingList implements OnInit{
    ingredients?: Ingredient[];

    constructor(private shoppingService: ShopListService){}

    
    ngOnInit(): void {
        this.ingredients = this.shoppingService.getIngredients();
        this.shoppingService.ingredientsChange.subscribe((ingredient: Ingredient[]) => this.ingredients = ingredient)
    }


 
}