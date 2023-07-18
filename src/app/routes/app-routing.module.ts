import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShoppingList } from '../features/shoppinglist/shoppinglist.component';
import { RecipeBook } from '../features/recipebook/recipebook.component';
import { RecipeDetail } from '../features/recipebook/recipedetail/recipedetail.component';
import { AlertRecipeComponent } from '../features/recipebook/alert-recipe/alert-recipe.component';
import { RecipeEditComponent } from '../features/recipebook/recipe-edit/recipe-edit.component';
import { RecipeResolverService } from '../features/recipebook/recipe-resolver.service';

const routes: Routes = [
  {
    path:'', redirectTo: '/recipes', pathMatch:'full'
  },
  {
    path:'recipes', component: RecipeBook,
    children:[
      {
        path:'', component: AlertRecipeComponent
      },
      {
        path: 'new', component:RecipeEditComponent
      },
      {
        path:':id', component:RecipeDetail, resolve:[RecipeResolverService]
      },
      {
        path: ':id/edit', component:RecipeEditComponent, resolve:[RecipeResolverService]
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
