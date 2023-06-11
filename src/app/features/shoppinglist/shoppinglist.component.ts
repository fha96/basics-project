import {Component} from '@angular/core';
import { ShopListService } from './shoplistservice.service';
import { Ingredient } from 'src/app/shared/ingredient.model';



@Component({
    selector:'shopping-list',
    templateUrl:'./shoppinglist.component.html',
    styleUrls:[],
    providers:[ShopListService]
})


export class ShoppingList {
 ingredients: Ingredient[] = [];
 

 updateList(data:{name:string, amount: number}){
    this.ingredients.push(new Ingredient(data.name, data.amount));
 }
 
}