import { ShoppingListService } from './shopping-list.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Ingredient} from './../shared/ingredient.model'
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients: Ingredient[] = [];
  subscription: Subscription;
  constructor(private shoppingListService: ShoppingListService) {
    this.subscription = this.shoppingListService.ingredientAdded.subscribe(ingredients => this.ingredients = ingredients);
   }

  ngOnInit() {
    this.ingredients = this.shoppingListService.getIngredients();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  onItemClick(index) {
    this.shoppingListService.onShoppingItemEdit(index);
  }
  
}
