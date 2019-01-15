import { RecipesService } from './../recipes.service';
import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  recipe : Recipe;
  constructor(private recipesService: RecipesService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.recipe = this.recipesService.getRecipeById(params["id"]);
    })
  }

  addIngredients() {
    this.recipesService.addIngredients(this.recipe.ingredients);
  }
}
