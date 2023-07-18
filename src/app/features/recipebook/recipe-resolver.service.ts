import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { Recipe } from './recipe.model';
import { Observable } from 'rxjs';
import { RecipeService } from './recipeservice.service';
import { Injectable } from '@angular/core';
import { DataStorageRecipies } from 'src/app/shared/data-storage-recipies.service';

@Injectable({ providedIn: 'root' })
export class RecipeResolverService implements Resolve<Recipe[]> {
  constructor(private dataStorage: DataStorageRecipies, private recipeService: RecipeService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Recipe[] | Observable<Recipe[]> | Promise<Recipe[]> {
    if(this.recipeService.getRecipies().length > 0){
        return this.recipeService.getRecipies();
    }
    return this.dataStorage.fetchRecipies();
  }
}
