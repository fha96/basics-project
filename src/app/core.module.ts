import { NgModule } from "@angular/core";
import { ShopListService } from "./features/shoppinglist/shoplistservice.service";
import { RecipeService } from "./features/recipebook/recipeservice.service";
import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { AuthInterceptor } from "./auth/auth-interceptor.service";

@NgModule({
    providers:[
        ShopListService,
        RecipeService,
        { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
      ]
})
export class CoreModule {

}