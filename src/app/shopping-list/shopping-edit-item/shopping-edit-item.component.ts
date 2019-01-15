import { ShoppingListService } from './../shopping-list.service';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit-item',
  templateUrl: './shopping-edit-item.component.html',
  styleUrls: ['./shopping-edit-item.component.css']
})
export class ShoppingEditItemComponent implements OnInit {
  @ViewChild('nameInput') nameInput: ElementRef;
  @ViewChild('amountInput') amountInput: ElementRef;
  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
  }

  addIngredient(e) {
    e.preventDefault();
    this.shoppingListService.onIngredientAdd(new Ingredient(this.nameInput.nativeElement.value, this.amountInput.nativeElement.value));
  }

}
