import { Component, OnInit, Output } from '@angular/core';
import {Recipe} from './../recipe.model';
import { EventEmitter } from 'events';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeSelected = new EventEmitter();
  recipes: Recipe[] = [
    new Recipe('test name', 'test desc', 'https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2013/05/frying-pan-pizza-easy-recipe-collection.jpg'),
    new Recipe('test name2', 'test desc2', 'https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2013/05/frying-pan-pizza-easy-recipe-collection.jpg')

  ];
  constructor() { }

  ngOnInit() {
  }

  onRecipeSelect(recipe) {
    this.recipeSelected.emit(recipe);
  }

}
