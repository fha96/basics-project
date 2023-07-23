import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShoppingList } from '../features/shoppinglist/shoppinglist.component';

const routes: Routes = [    
  {
    path: '',
    component: ShoppingList,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShoppingListRoutesModule {}
