import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './routes/app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ShoppingList } from './features/shoppinglist/shoppinglist.component';
import { RecipeDetail } from './features/recipebook/recipedetail/recipedetail.component';
import { RecipeList } from './features/recipebook/recipelist/recipelist.component';
import { ListEdit } from './features/shoppinglist/shoppinglistedit/listedit.component';
import { RecipeBook } from './features/recipebook/recipebook.component';
import { RecipeitemComponent } from './features/recipebook/recipelist/recipeitem/recipeitem.component';
import { DropDownDirective } from './shared/dropdown.directive';
import { ShopListService } from './features/shoppinglist/shoplistservice.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ShoppingList,
    RecipeDetail,
    RecipeList,
    ListEdit,
    RecipeBook,
    RecipeitemComponent,
    DropDownDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers:[ShopListService]
  ,bootstrap: [AppComponent]
})
export class AppModule { }
