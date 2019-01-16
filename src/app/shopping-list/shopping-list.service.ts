import { Ingredient } from './../shared/ingredient.model';
import { Subject } from 'rxjs';

export class ShoppingListService {
    ingredients: Ingredient[] = [];
    ingredientAdded = new Subject<Ingredient[]>();
    shoppingItemEdit = new Subject<number>();
    constructor() {
        this.ingredients = [
            new Ingredient('Apples', 1),
            new Ingredient('Tomatoes', 2)
          ];
    }

    getIngredients() {
        return [...this.ingredients];
    }

    getIngredient(index) {
        return this.ingredients[index];
    }

    deleteIngredient(index) {
        this.ingredients.splice(index, 1);
        this.ingredientAdded.next(this.getIngredients());
    }

    updateIngredient(index:number,ingredient: Ingredient) {
        this.ingredients[index] = ingredient;
        this.ingredientAdded.next(this.getIngredients());
    }

    onIngredientAdd(ingredient: Ingredient) {
        this.ingredients.push(ingredient);
        this.ingredientAdded.next(this.getIngredients());
    }

    addIngredients(ingredients: Ingredient[]) {
        this.ingredients.push(...ingredients);
        this.ingredientAdded.next(this.getIngredients());
    }

    onShoppingItemEdit(index) {
        this.shoppingItemEdit.next(index);
    }
}