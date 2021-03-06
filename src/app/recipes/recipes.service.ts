import { AuthService } from './../auth/auth.service';
import { ShoppingListService } from './../shopping-list/shopping-list.service';
import { Injectable } from '@angular/core';
import {Recipe} from './recipe.model'; 
import { Ingredient } from '../shared/ingredient.model';
import { Subject } from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class RecipesService {
    recipes: Recipe[] = [];
    recipeChanged = new Subject<Recipe[]>();
    constructor(private shoppingListService: ShoppingListService, private http: HttpClient, private authService: AuthService) {
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

    addIngredients(ingredients: Ingredient[]) {
        this.shoppingListService.addIngredients(ingredients);
    }

    addRecipe(recipe: Recipe) {
        this.recipes.push(recipe);
        this.recipeChanged.next(this.getRecipes());
    }

    updateRecipe(index: number, recipe: Recipe) {
        this.recipes[index] = recipe;
        this.recipeChanged.next(this.getRecipes());
    }

    deleteRecipe(index: number) {
        this.recipes.splice(index, 1);
        this.recipeChanged.next(this.getRecipes());
    }

    fetchRecipes() {
        const token = this.authService.getToken();
        this.http.get('https://myshoppinglist-c674b.firebaseio.com/recipes.json?auth=' + token).subscribe((res: Recipe[]) => {
            this.recipes = res;
            this.recipeChanged.next(this.getRecipes());
        });
    }

    saveRecipes() {
        const token = this.authService.getToken();
        this.http.put('https://myshoppinglist-c674b.firebaseio.com/recipes.json?auth=' + token, this.recipes).subscribe((res) => {
            console.log(res);
        })
    }
}