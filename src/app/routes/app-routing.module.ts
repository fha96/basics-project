import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { RecipeModule } from '../features/recipebook/recipe.module';
RecipeModule;

const routes: Routes = [
  {
    path: '',
    redirectTo: '/recipes',
    pathMatch: 'full',
  },
  {
    path: 'recipes',
    loadChildren: () =>
      import('../features/recipebook/recipe.module').then(
        (m) => m.RecipeModule
      ),
  },
  {
    path: 'shoppinglist',
    loadChildren: () =>
      import('../features/shoppinglist/shoplist.module').then(
        (module) => module.ShopListModule
      ),
  },
  {
    path:'auth', loadChildren: () => import('../auth/auth.module').then(module => module.AuthModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
