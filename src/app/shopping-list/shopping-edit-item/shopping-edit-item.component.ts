import { ShoppingListService } from './../shopping-list.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-shopping-edit-item',
  templateUrl: './shopping-edit-item.component.html',
  styleUrls: ['./shopping-edit-item.component.css']
})
export class ShoppingEditItemComponent implements OnInit {
  @ViewChild('form') shoppingForm: NgForm;
  editMode: boolean = false;
  index: number = -1;
  ingredient: Ingredient = null;

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
    this.shoppingListService.shoppingItemEdit.subscribe(this.onShoppingItemEdit.bind(this))
  }

  onShoppingItemEdit(index) {
    this.index = index;
    this.editMode = true;
    this.ingredient = this.shoppingListService.getIngredient(index);
    this.shoppingForm.setValue({name: this.ingredient.name, amount: this.ingredient.amount});

  }

  onFormSubmit(form) {
    const ingredient = new Ingredient(form.value.name, form.value.amount);
    if (this.editMode) {
      this.shoppingListService.updateIngredient(this.index, ingredient);
    }
    else {
      this.shoppingListService.onIngredientAdd(ingredient);
    }
    this.onClear();
  }

  onDelete() {
    this.shoppingListService.deleteIngredient(this.index);
    this.onClear()
  }

  onClear() {
    this.shoppingForm.reset();
    this.editMode = false;
  }

}
