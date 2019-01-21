import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Recipe } from '../recipe.model';
import { RecipesService } from '../recipes.service';
import { FormGroup, FormControl, FormArray } from '@angular/forms';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-edit-recipe',
  templateUrl: './edit-recipe.component.html',
  styleUrls: ['./edit-recipe.component.css']
})
export class EditRecipeComponent implements OnInit {
  editMode: boolean = false;
  id: number = null;
  recipe: Recipe = null;
  recipeForm: FormGroup = null;
  constructor(private activatedRoute: ActivatedRoute, private recipeService: RecipesService) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.editMode = !!params['id'];
      this.id = params['id'];
      this.initForm();
    });
    console.log(this.editMode);
  }

  initForm() {
    let name = '';
    let description = '';
    let imagePath = '';
    let ingredients: Ingredient[] = [];
    let recipeIngredients = new FormArray([]);
    if (this.editMode) {
      this.recipe = this.recipeService.getRecipeById(this.id);
      name = this.recipe.name;
      description = this.recipe.description;
      imagePath = this.recipe.imagePath;
      ingredients = this.recipe.ingredients;
    }
    ingredients.forEach((ingredient, index) => {
        recipeIngredients.push(new FormGroup({
          'name': new FormControl(ingredient.name),
          'amount': new FormControl(ingredient.amount)
        }))
    })
    this.recipeForm = new FormGroup({
      'name': new FormControl(name),
      'imagePath': new FormControl(imagePath),
      'description': new FormControl(description),
      'ingredients': recipeIngredients
    })
  }

}
