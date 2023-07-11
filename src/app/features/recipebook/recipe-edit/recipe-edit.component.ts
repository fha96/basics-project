import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { RecipeService } from '../recipeservice.service';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit{
  id: number ;
  editMode: boolean = false ;
  recipeEditForm: FormGroup ;
  constructor(private activatedRoute: ActivatedRoute,
              private recipeService: RecipeService){}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
      (params: Params) => {
        this.id = +params.id ;
        this.editMode = params.id != null ;
        console.log(this.editMode);
        this.initForm();
      }
    );
  }


  private initForm() {
    let recipeName = '' ;
    let recipeImage = '';
    let recipeDescription = '' ;
    let recipeIngredients = new FormArray([]);

    if(this.editMode) {
      const recipe = this.recipeService.getRecipeById(this.id);
      recipeName =  recipe.name ;
      recipeImage = recipe.imagePath ;
      recipeDescription = recipe.description ;
      if(recipe.ingredients){
        for( let ingredient of recipe.ingredients){
          recipeIngredients.push(
            new FormGroup({
              name: new FormControl(ingredient.name),
              amount: new FormControl(ingredient.amount)
            })
          );
        }
      }
    }
    this.recipeEditForm = new FormGroup({
      name: new FormControl(recipeName),
      imagepath: new FormControl(recipeImage),
      description: new FormControl(recipeDescription),
      ingredients: recipeIngredients
    });
  }
  onSubmit(){
    console.log(this.recipeEditForm);
    
  }


  getIngredientsControls(){
    return (<FormArray>this.recipeEditForm.get('ingredients')).controls;
  }
}
