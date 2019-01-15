import { Ingredient } from './../shared/ingredient.model';
import { EventEmitter } from '@angular/core';

export class ShoppingListService {
    ingredients: Ingredient[] = [];
    ingredientAdded = new EventEmitter<Ingredient[]>();
    constructor() {
        this.ingredients = [
            new Ingredient('Apples', 1),
            new Ingredient('Tomatoes', 2)
          ];
    }

    getIngredients() {
        return [...this.ingredients];
    }

    onIngredientAdd(ingredient: Ingredient) {
        this.ingredients.push(ingredient);
        this.ingredientAdded.emit(this.getIngredients());
    }

    addIngredients(ingredients: Ingredient[]) {
        this.ingredients.push(...ingredients);
        this.ingredientAdded.emit(this.getIngredients());
    }
}