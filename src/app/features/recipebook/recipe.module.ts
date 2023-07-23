import { NgModule } from '@angular/core';
import { RecipeDetail } from './recipedetail/recipedetail.component';
import { RecipeList } from './recipelist/recipelist.component';
import { AlertRecipeComponent } from './alert-recipe/alert-recipe.component';
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';
import { RecipeitemComponent } from './recipelist/recipeitem/recipeitem.component';
import { RecipeBook } from './recipebook.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RecipeRoutesModule } from 'src/app/routes/recipe-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    RecipeDetail,
    RecipeList,
    AlertRecipeComponent,
    RecipeEditComponent,
    RecipeBook,
    RecipeitemComponent,
  ],
  imports: [RecipeRoutesModule, SharedModule, ReactiveFormsModule],
})
export class RecipeModule {}
