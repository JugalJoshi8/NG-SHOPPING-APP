import { ShoppingListService } from './../shopping-list/shopping-list.service';
import { EventEmitter, Injectable } from '@angular/core';
import {Recipe} from './recipe.model'; 
import { Ingredient } from '../shared/ingredient.model';

@Injectable()
export class RecipesService {
    recipes: Recipe[] = [];
    recipeSelected = new EventEmitter<Recipe>();
    constructor(private shoppingListService: ShoppingListService) {
        this.recipes = [
            new Recipe('test name',
             'test desc',
              'https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2013/05/frying-pan-pizza-easy-recipe-collection.jpg',
              [new Ingredient('meat', 2),
            new Ingredient('cheese', 2)]),
            new Recipe('test name2',
            'test desc2',
             'https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2013/05/frying-pan-pizza-easy-recipe-collection.jpg',
             [new Ingredient('bread', 2),
           new Ingredient('salad', 2)]),        
          ];
    }

    getRecipes() {
        return [...this.recipes];
    }
    getRecipeById(id) {
        return this.recipes[id];
    }

    onRecipeSelect(recipe) {
        this.recipeSelected.emit(recipe);
    }

    addIngredients(ingredients: Ingredient[]) {
        this.shoppingListService.addIngredients(ingredients);
    }
}