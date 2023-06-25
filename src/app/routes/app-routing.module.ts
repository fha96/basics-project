import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShoppingList } from '../features/shoppinglist/shoppinglist.component';
import { RecipeBook } from '../features/recipebook/recipebook.component';
import { RecipeDetail } from '../features/recipebook/recipedetail/recipedetail.component';

const routes: Routes = [
  {
    path:'', redirectTo: '/recipes', pathMatch:'full'
  },
  {
    path:'recipes', component: RecipeBook,
    children:[
      {
        path:':id', component:RecipeDetail
      }
    ]
  },
  {
    path:'shoppinglist', component: ShoppingList
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
