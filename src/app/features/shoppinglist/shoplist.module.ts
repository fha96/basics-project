import { NgModule } from '@angular/core';
import { ShoppingList } from './shoppinglist.component';
import { ListEdit } from './shoppinglistedit/listedit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ShoppingListRoutesModule } from 'src/app/routes/shoppinglist-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [ShoppingList, ListEdit],
  imports:[
    SharedModule,
    FormsModule,
    ShoppingListRoutesModule,
  ]
})
export class ShopListModule {}
