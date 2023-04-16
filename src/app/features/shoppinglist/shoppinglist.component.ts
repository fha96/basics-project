import {Component} from '@angular/core';
import { Ingredient } from 'src/app/shared/imgredient.model';



@Component({
    selector:'shopping-list',
    templateUrl:'./shoppinglist.component.html',
    styleUrls:[]
})


export class ShoppingList {
 ingredients: Ingredient[]=[
    new Ingredient('Salt', 5),
    new Ingredient('Sugar', 20)
 ];
 
 
}