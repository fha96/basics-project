import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "../auth/auth.guard";
import { AlertRecipeComponent } from "../features/recipebook/alert-recipe/alert-recipe.component";
import { RecipeEditComponent } from "../features/recipebook/recipe-edit/recipe-edit.component";
import { RecipeResolverService } from "../features/recipebook/recipe-resolver.service";
import { RecipeBook } from "../features/recipebook/recipebook.component";
import { RecipeDetail } from "../features/recipebook/recipedetail/recipedetail.component";

const routes: Routes = [
    {
        path: '',
        component: RecipeBook,
        canActivate: [AuthGuard],
        children: [
          {
            path: '',
            component: AlertRecipeComponent,
          },
          {
            path: 'new',
            component: RecipeEditComponent,
          },
          {
            path: ':id',
            component: RecipeDetail,
            resolve: [RecipeResolverService],
          },
          {
            path: ':id/edit',
            component: RecipeEditComponent,
            resolve: [RecipeResolverService],
          },
        ],
      },
]

@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]
})
export class RecipeRoutesModule {}