import { RecipesService } from './../recipes.service';
import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  recipe : Recipe;
  id: number;
  constructor(private recipesService: RecipesService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.id = params['id'];
      this.recipe = this.recipesService.getRecipeById(params["id"]);
    })
  }

  addIngredients() {
    this.recipesService.addIngredients(this.recipe.ingredients);
  }

  deleteRecipe() {
    this.recipesService.deleteRecipe(this.id);
    this.router.navigate(['/recipes']);
  }
}
