import { Component, OnInit, ViewChild, Output, EventEmitter, ElementRef } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit-item',
  templateUrl: './shopping-edit-item.component.html',
  styleUrls: ['./shopping-edit-item.component.css']
})
export class ShoppingEditItemComponent implements OnInit {
  @ViewChild('nameInput') nameInput: ElementRef;
  @ViewChild('amountInput') amountInput: ElementRef;
  @Output() onAddIngredient: EventEmitter<Ingredient> = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  addIngredient(e) {
    e.preventDefault();
    this.onAddIngredient.emit(new Ingredient(this.nameInput.nativeElement.value, this.amountInput.nativeElement.value));
  }

}
