import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Recipe } from '../recipe.model';
import { RecipesService } from '../recipes.service';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
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
  constructor(private activatedRoute: ActivatedRoute, private recipeService: RecipesService, private router: Router) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.editMode = !!params['id'];
      this.id = params['id'];
      this.initForm();
    });
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
          'name': new FormControl(ingredient.name, Validators.required),
          'amount': new FormControl(ingredient.amount, [
            Validators.required,
            Validators.pattern(/^[1-9]+[0-9]*/)
          ])
        }))
    })
    this.recipeForm = new FormGroup({
      'name': new FormControl(name, Validators.required),
      'imagePath': new FormControl(imagePath, Validators.required),
      'description': new FormControl(description, Validators.required),
      'ingredients': recipeIngredients
    })
  }

  addIngredient() {
    (<FormArray>this.recipeForm.get('ingredients')).push(new FormGroup({
      'name': new FormControl(null, Validators.required),
      'amount': new FormControl(null, [
        Validators.required,
        Validators.pattern(/^[1-9]+[0-9]*/)
      ])
    }))
  }

  onSubmit() {
    if(this.editMode) {
      this.recipeService.updateRecipe(this.id, this.recipeForm.value);
    }
    else {
      this.recipeService.addRecipe(this.recipeForm.value);
    }
    this.navigateBack();
  }

  navigateBack() {
    this.router.navigate(['../'], {relativeTo: this.activatedRoute});
  }

  removeIngredient(index: number) {
    (<FormArray>this.recipeForm.get('ingredients')).removeAt(index);
  }

}
